import type { GameState } from './state'
import { produce } from 'immer'
import type { RNG } from '@remake/vitex'
import { random } from '@remake/vitex'
import { Realm, REALMS, talents, type Realm as RealmType } from '@remake/data'

/** 特殊事件 ID（须与内容数据一致） */
export const WASH_MARROW_EVENT = 9000
export const ASCENSION_EVENT = 9600

export const breakthroughSuccessEvent = (realm: RealmType) => 9100 + realm
export const breakthroughFailEvent = (realm: RealmType) => 9200 + realm
export const tribulationSuccessEvent = (realm: RealmType) => 9300 + realm
export const tribulationInjureEvent = (realm: RealmType) => 9400 + realm
export const tribulationDeathEvent = (realm: RealmType) => 9500 + realm

/** 每回合修炼所得修为（修为越高，修炼越快） */
export function cultivationGain(state: GameState): number {
    if (state.phase !== 'immortal' || !state.immortal) return 0
    const { aptitude, comprehension, spiritCharm } = state.immortal.current
    const dao = Math.max(0, state.daoInsight ?? 0)
    const demon = Math.max(0, state.demonHeart ?? 0)
    // 猫修特色：灵韵（spiritCharm）是猫咪与天地灵气的亲和力，人类修士没有这条捷径
    const base = 8 + aptitude + comprehension + spiritCharm + dao - demon * 2
    const realmFactor = Math.pow(2, Math.max(0, state.realm - 1))
    const se = Math.min(3, 1 + state.spiritEnergy / 200)
    return Math.max(1, Math.floor(base * realmFactor * se))
}

/** 是否应突破 */
export function shouldBreakthrough(state: GameState): boolean {
    if (state.phase !== 'immortal') return false
    if (state.realm >= Realm.Ascension) return false
    const info = REALMS[state.realm]!
    return state.cultivation >= info.threshold
}

export interface BreakthroughResult {
    state: GameState
    eventId: number
}

/** 突破/渡劫 */
export function doBreakthrough(
    state: GameState,
    rng?: RNG,
): BreakthroughResult {
    const target = (state.realm + 1) as RealmType
    const info = REALMS[target]!
    const im = state.immortal!.current
    const { aptitude, comprehension, physique, fortune } = im

    // 成功率：普通突破看 根骨+悟性；渡劫看 体魄+机缘+根骨悟性；道韵增益、心魔减益
    let chance = 0.5 + (aptitude + comprehension) * 0.03
    if (info.tribulation) {
        chance =
            0.4 +
            physique * 0.02 +
            fortune * 0.02 +
            (aptitude + comprehension) * 0.015
    }
    chance += (state.daoInsight ?? 0) * 0.01 - (state.demonHeart ?? 0) * 0.02
    chance = Math.min(0.95, Math.max(0.05, chance))
    const success = random(100, 1, rng) <= Math.round(chance * 100)

    if (success) {
        const s = produce(state, draft => {
            draft.realm = target
            draft.cultivation = 0
            draft.spiritEnergy = 0
            draft.lifespan = info.lifespan
            if (info.tribulation) draft.tribulation += 1
        })
        if (target === Realm.Ascension)
            return { state: s, eventId: ASCENSION_EVENT }
        return {
            state: s,
            eventId: info.tribulation
                ? tribulationSuccessEvent(target)
                : breakthroughSuccessEvent(target),
        }
    }

    // 突破失败
    if (info.tribulation) {
        // 渡劫失败：可能陨落，可能重伤折寿
        const die = random(100, 1, rng) <= 30
        const s = produce(state, draft => {
            draft.cultivation = Math.floor(draft.cultivation * 0.4)
            draft.spiritEnergy = 0
            if (die) draft.life = 0
            else draft.lifespan = Math.max(1, draft.lifespan - 50)
        })
        return {
            state: s,
            eventId: die
                ? tribulationDeathEvent(target)
                : tribulationInjureEvent(target),
        }
    }

    const s = produce(state, draft => {
        draft.cultivation = Math.floor(draft.cultivation * 0.5)
    })
    return { state: s, eventId: breakthroughFailEvent(target) }
}

/** 是否拥有灵根类天赋 */
export function hasSpiritRootTalent(state: GameState): boolean {
    for (const id of state.talents) {
        if (talents.get(id)?.category === 'spiritRoot') return true
    }
    return false
}
