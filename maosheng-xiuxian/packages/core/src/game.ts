import type { Achievement, Event, Talent } from '@remake/data'
import {
    ages,
    realmEvents,
    AchievementOpportunity as Ao,
    Realm,
    REALMS,
} from '@remake/data'
import type { GameState, ProfileState, ImmortalAllocation } from './state'
import {
    createState,
    createHLImmortalFive,
    nextProfile,
    propsEffect,
} from './state'
import { summary as stateSummary } from './state'
import type { ReplacementResult, AdditionalPoints } from './talent'
import { pull, exclude, replacement, additionalPoints } from './talent'
import { trigger as ttr } from './talent'
import { trigger as atr } from './achievement'
import { trigger as etr, check as ec } from './event'
import {
    cultivationGain,
    shouldBreakthrough,
    doBreakthrough,
    hasSpiritRootTalent,
    WASH_MARROW_EVENT,
} from './cultivation'
import type { RNG } from '@remake/vitex'
import { pickWeight } from '@remake/vitex'
import { produce, enableMapSet } from 'immer'
enableMapSet()

export interface TriggerResult<T> {
    state: GameState
    triggers: T[]
}
export interface PickResult {
    talents: ReplacementResult
    additionalPoints: AdditionalPoints
}
export function pick(talents: Iterable<Talent['id']>, rng?: RNG): PickResult {
    const r = replacement(talents, rng)
    const ap = additionalPoints(r.talents)
    return { talents: r, additionalPoints: ap }
}

export interface StartResult {
    state: GameState
    achievements: Achievement['id'][]
}
export function start(
    profile: ProfileState,
    ...args: Parameters<typeof createState>
): StartResult {
    const state = createState(...args)
    const ar = atr(Ao.Start, state, profile)
    return { state: ar.state, achievements: ar.triggers }
}
export interface NextResult {
    state: GameState
    age: number
    achievements: Achievement['id'][]
    events: Event['id'][]
    talents: Talent['id'][]
    end: boolean
    washMarrow: boolean
}

export function next(
    state: GameState,
    profile: ProfileState,
    rng?: RNG,
): NextResult {
    let s = produce(state, draft => {
        draft.props = propsEffect(state.props, { age: 1 })
    })
    const age = s.props.current.age
    const tr = ttr(s, profile, rng)
    s = tr.state

    let er: TriggerResult<Event['id']> = { state: s, triggers: [] }

    if (s.phase === 'immortal') {
        const gain = cultivationGain(s)
        s = produce(s, draft => {
            draft.cultivation += gain
            draft.spiritEnergy += 1
        })
        if (shouldBreakthrough(s)) {
            const br = doBreakthrough(s, rng)
            s = br.state
            er = etr(br.eventId, s, profile)
        } else {
            const pool = realmEvents.get(s.realm) ?? []
            const filtered = pool.filter(([e]) => ec(e, s, profile))
            const ev = pickWeight(filtered, rng)
            if (ev != null) er = etr(ev, s, profile)
        }
        if (s.props.current.age >= s.lifespan) {
            s = produce(s, draft => {
                draft.life = 0
            })
        }
    } else {
        let ev: number | null = null
        if (hasSpiritRootTalent(s) && age >= 3 && age <= 6) {
            ev = WASH_MARROW_EVENT
        } else {
            const pool = ages.get(age)?.event ?? []
            const filtered = pool.filter(([e]) => ec(e, s, profile))
            ev = pickWeight(filtered, rng)
        }
        if (ev != null) er = etr(ev, s, profile)
        if (s.props.current.age >= s.lifespan) {
            s = produce(s, draft => {
                draft.life = 0
            })
        }
    }

    s = er.state
    const ar = atr(Ao.Trajectory, s, profile)
    s = ar.state
    const end = s.life < 1
    return {
        state: s,
        age,
        achievements: ar.triggers,
        events: er.triggers,
        talents: tr.triggers,
        end,
        washMarrow: s.pendingImmortalAlloc,
    }
}

/** 伐骨洗髓后应用仙侠五维，踏入修仙 */
export function applyImmortal(
    state: GameState,
    allocation: ImmortalAllocation,
): GameState {
    return produce(state, draft => {
        draft.immortal = createHLImmortalFive(allocation)
        draft.phase = 'immortal'
        draft.realm = Realm.QiRefining
        draft.cultivation = 0
        draft.spiritEnergy = 0
        draft.lifespan = REALMS[Realm.QiRefining]!.lifespan
        draft.pendingImmortalAlloc = false
    })
}

export interface SummaryResult {
    state: GameState
    summary: number
    achievements: Achievement['id'][]
}
export function summary(
    state: GameState,
    profile: ProfileState,
): SummaryResult {
    const ar = atr(Ao.Summary, state, profile)
    const s = stateSummary(ar.state)
    return { state: ar.state, summary: s, achievements: ar.triggers }
}

export interface EndResult {
    profile: ProfileState
    achievements: Achievement['id'][]
}

export function end(
    state: GameState,
    profile: ProfileState,
    locked?: Talent['id'][],
) {
    const ar = atr(Ao.End, state, profile)
    const p = nextProfile(profile, ar.state, locked)
    return { profile: p, achievements: ar.triggers }
}

export { pull, exclude }
