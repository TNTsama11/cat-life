import type { Achievement, Event, Talent } from '@remake/data'
import {
    ages,
    events,
    realmEvents,
    AchievementOpportunity as Ao,
    Realm,
    REALMS,
} from '@remake/data'
import type { Allocation, GameState, ProfileState, ImmortalAllocation } from './state'
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
import { pickWeight, random } from '@remake/vitex'
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

/** 凡猫阶段仙缘预兆事件（须在 events-mortal5 中登记，effect.SEED 推进仙缘） */
const FORTUNE_HINT_EVENTS = [2501, 2502, 2503, 2504, 2505, 2506] as const

/** 情感/生育类事件 */
const ROMANCE_EVENT_IDS = new Set<Event['id']>([2138, 2423, 2471, 2472, 2473, 2474])
/** 主人带去相亲（城市家猫的主要情感出口） */
const MATCHMAKING_EVENT = 2138
/** 普通事件基础权重 */
const MORTAL_BASE_WEIGHT = 10

/**
 * 情感/生育事件权重：
 * - 整体比普通事件低
 * - 家猫比流浪猫低
 * - 城市家猫几乎不出门，生育/发情权重极低，主要靠主人带去相亲
 */
function mortalEventWeight(eventId: Event['id'], state: GameState): number {
    if (!ROMANCE_EVENT_IDS.has(eventId)) return MORTAL_BASE_WEIGHT
    if (state.adopted) {
        if (state.habitat === 'urban') {
            return eventId === MATCHMAKING_EVENT ? 8 : 1
        }
        return 4 // 农村家猫：会出门，但概率仍低于流浪猫
    }
    return 6 // 流浪猫：情感/生育机会最高
}

/** 根据加点计算被人类收养的概率：出身（MNY）与颜值（CHR）越高越容易被捡/被买走 */
export function adoptionChance(allocation: Allocation): number {
    return Math.max(
        5,
        Math.min(95, 40 + allocation.money * 3 + allocation.charm * 2),
    )
}

/** 根据加点 roll 是否被人类收养 */
export function rollAdoption(
    allocation: Allocation,
    rng?: RNG,
): boolean {
    return random(99, 0, rng) < adoptionChance(allocation)
}

/** roll 猫的性别：三花猫几乎都是母猫，其他五五开 */
export function rollGender(
    talents?: Iterable<Talent['id']>,
    rng?: RNG,
): 'male' | 'female' {
    for (const id of talents ?? []) {
        if (id === 1010) return 'female' // 三花姑娘
    }
    return random(99, 0, rng) < 50 ? 'male' : 'female'
}

/** 根据是否被收养 + 出身（MNY）决定生活环境：城市家猫 / 农村家猫 / 流浪 */
export function rollHabitat(
    adopted: boolean,
    money: number,
): 'wild' | 'rural' | 'urban' {
    if (!adopted) return 'wild'
    return money >= 7 ? 'urban' : 'rural'
}

export interface StartResult {
    state: GameState
    achievements: Achievement['id'][]
}
export function start(
    profile: ProfileState,
    allocation: Allocation,
    talents?: Iterable<Talent['id']>,
    rng?: RNG,
): StartResult {
    const state = createState(allocation, talents)
    state.adopted = rollAdoption(allocation, rng)
    state.gender = rollGender(talents, rng)
    state.habitat = rollHabitat(state.adopted, allocation.money)
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
            // 藏拙降低暴露，扬名增加暴露（引来机缘，也引来危险）
            const drift = draft.stance === 'fame' ? 3 : -3
            draft.exposure = Math.min(100, Math.max(0, draft.exposure + drift))
        })
        if (shouldBreakthrough(s)) {
            const br = doBreakthrough(s, rng)
            s = br.state
            er = etr(br.eventId, s, profile)
        } else {
            const pool = realmEvents.get(s.realm) ?? []
            const filtered = pool.filter(([e]) => ec(e, s, profile))
            // 机缘越高，越容易遇到高稀有度事件；扬名会额外吸引机缘与风险
            const stanceBonus = s.stance === 'fame' ? 5 : 0
            const fortune = (s.immortal?.current.fortune ?? 0) + stanceBonus
            const weighted = filtered.map(([e]) => {
                const grade = events.get(e)?.grade ?? 0
                const w = 1 + Math.max(0, fortune) * grade * 0.08
                return [e, w] as [Event['id'], number]
            })
            const ev = pickWeight(weighted, rng)
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
            // 灵根猫不再“啪”一下入道：先给 1~2 次仙缘预兆，再伐骨洗髓
            if (s.immortalSeed >= 2 || age === 6) {
                ev = WASH_MARROW_EVENT
            } else {
                const hints = FORTUNE_HINT_EVENTS.filter(e => ec(e, s, profile))
                if (hints.length > 0) {
                    ev = hints[random(hints.length - 1, 0, rng)] ?? null
                } else {
                    const pool = ages.get(age)?.event ?? []
                    const filtered = pool.filter(([e]) => ec(e, s, profile))
                    const weighted = filtered.map(([e, w]) => [
                        e,
                        w * mortalEventWeight(e, s),
                    ] as [Event['id'], number])
                    ev = pickWeight(weighted, rng)
                }
            }
        } else {
            const pool = ages.get(age)?.event ?? []
            const filtered = pool.filter(([e]) => ec(e, s, profile))
            const weighted = filtered.map(([e, w]) => [
                e,
                w * mortalEventWeight(e, s),
            ] as [Event['id'], number])
            ev = pickWeight(weighted, rng)
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
        draft.immortalSeed = 0
        draft.exposure = 0
        draft.stance = 'hide'
        // 伐骨洗髓再造肉体：凡猫时期的绝育不再作数
        draft.sterilized = false
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
