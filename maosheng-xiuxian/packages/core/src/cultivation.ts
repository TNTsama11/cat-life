import type { GameState } from './state'
import { produce } from 'immer'
import type { RNG } from '@remake/vitex'
import { random } from '@remake/vitex'
import { Realm, REALMS, talents, type Realm as RealmType } from '@remake/data'

/** 特殊事件 ID（须与内容数据一致） */
export const WASH_MARROW_EVENT = 9000
export const ASCENSION_EVENT = 9600
export const NINE_LIVES_EVENT = 9508

export const breakthroughSuccessEvent = (realm: RealmType) => 9100 + realm
export const breakthroughFailEvent = (realm: RealmType) => 9200 + realm
export const tribulationSuccessEvent = (realm: RealmType) => 9300 + realm
export const tribulationInjureEvent = (realm: RealmType) => 9400 + realm
export const tribulationDeathEvent = (realm: RealmType) => 9500 + realm

/** 渡劫过程事件 */
export const TRI_STAGE_EVENTS = {
    thunderPass: 9711,
    thunderFail: 9712,
    mindPass: 9713,
    mindFail: 9714,
    windPass: 9715,
    windFail: 9716,
    karmaPass: 9717,
    karmaFail: 9718,
} as const

function clampChance(chance: number): number {
    return Math.min(0.95, Math.max(0.05, chance))
}

function rollChance(chance: number, rng?: RNG): boolean {
    return random(100, 1, rng) <= Math.round(chance * 100)
}

/** 九命/保命类天赋提供的额外生命数 */
function availableLives(state: GameState): number {
    let lives = 0
    if (state.talents.has(1201)) lives += 3 // 九命玄猫
    if (state.talents.has(1007)) lives += 1 // 九条命
    if (state.talents.has(1313)) lives += 3 // 九命护体
    return lives
}

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

/** 是否应进入瓶颈期 */
export function shouldBreakthrough(state: GameState): boolean {
    if (state.phase !== 'immortal') return false
    if (state.realm >= Realm.Ascension) return false
    const info = REALMS[state.realm]!
    return state.cultivation >= info.threshold
}

export interface BreakthroughResult {
    state: GameState
    /** 最终结果事件（兼容旧逻辑） */
    eventId: number
    /** 渡劫/突破过程中依次触发的事件链 */
    eventIds: number[]
}

/**
 * 突破/渡劫。
 * 普通突破单次判定；渡劫为多阶段判定：
 * 雷劫 → 心魔劫 →（通神起）风火劫 →（飞升）因果劫。
 */
export function doBreakthrough(
    state: GameState,
    rng?: RNG,
): BreakthroughResult {
    const target = (state.realm + 1) as RealmType
    const info = REALMS[target]!
    const im = state.immortal!.current
    const { aptitude, comprehension, physique, fortune } = im
    const dao = state.daoInsight ?? 0
    const demon = state.demonHeart ?? 0
    const prep = state.tribulationPrep ?? 0
    const karma = state.karma ?? 0
    const prevCultivation = state.cultivation

    const base = produce(state, draft => {
        draft.bottleneck = false
        draft.breakthroughAction = 'none'
        draft.forceBreakthrough = false
    })

    // ============ 普通突破（凝脉；飞升虽标记为非渡劫，但按渡劫处理） ============
    if (!info.tribulation && target !== Realm.Ascension) {
        let chance =
            0.25 +
            aptitude * 0.03 +
            comprehension * 0.025 +
            physique * 0.01 +
            dao * 0.005 -
            demon * 0.02 +
            prep * 0.003
        chance = clampChance(chance)
        if (rollChance(chance, rng)) {
            const s = produce(base, draft => {
                draft.realm = target
                draft.cultivation = 0
                draft.spiritEnergy = 0
                draft.lifespan = info.lifespan
                draft.tribulationPrep = 0
            })
            const id = breakthroughSuccessEvent(target)
            return { state: s, eventId: id, eventIds: [id] }
        }
        const s = produce(base, draft => {
            draft.cultivation = Math.floor(prevCultivation * 0.5)
            draft.tribulationPrep = Math.min(100, Math.floor(prep * 0.3))
        })
        const id = breakthroughFailEvent(target)
        return { state: s, eventId: id, eventIds: [id] }
    }

    // ============ 渡劫（多阶段） ============
    const stages: { pass: boolean; passEvent: number; failEvent: number }[] = []

    // 雷劫：看体魄 + 准备度
    stages.push({
        pass: rollChance(clampChance(0.35 + physique * 0.03 + prep * 0.004), rng),
        passEvent: TRI_STAGE_EVENTS.thunderPass,
        failEvent: TRI_STAGE_EVENTS.thunderFail,
    })

    // 心魔劫：看道韵 - 心魔，善缘有助
    stages.push({
        pass: rollChance(clampChance(0.35 + dao * 0.012 - demon * 0.02 + karma * 0.001), rng),
        passEvent: TRI_STAGE_EVENTS.mindPass,
        failEvent: TRI_STAGE_EVENTS.mindFail,
    })

    // 风火劫：通神及以上才有
    if (target >= Realm.SpiritSevering) {
        stages.push({
            pass: rollChance(clampChance(0.4 + physique * 0.025 + fortune * 0.015 + prep * 0.003), rng),
            passEvent: TRI_STAGE_EVENTS.windPass,
            failEvent: TRI_STAGE_EVENTS.windFail,
        })
    }

    // 因果劫：飞升才有
    if (target === Realm.Ascension) {
        stages.push({
            pass: rollChance(clampChance(0.5 + karma * 0.004 + dao * 0.005), rng),
            passEvent: TRI_STAGE_EVENTS.karmaPass,
            failEvent: TRI_STAGE_EVENTS.karmaFail,
        })
    }

    const failCount = stages.filter(stage => !stage.pass).length
    const processEvents = stages.map(stage =>
        stage.pass ? stage.passEvent : stage.failEvent,
    )

    // 全部通过：突破成功
    if (failCount === 0) {
        const s = produce(base, draft => {
            draft.realm = target
            draft.cultivation = 0
            draft.spiritEnergy = 0
            draft.lifespan = info.lifespan
            draft.tribulation += 1
            draft.tribulationPrep = 0
        })
        const final = target === Realm.Ascension ? ASCENSION_EVENT : tribulationSuccessEvent(target)
        return { state: s, eventId: final, eventIds: [...processEvents, final] }
    }

    // 只失败一劫：重伤折寿
    if (failCount === 1) {
        const s = produce(base, draft => {
            draft.cultivation = Math.floor(prevCultivation * 0.4)
            draft.spiritEnergy = 0
            draft.lifespan = Math.max(1, draft.lifespan - 40)
            draft.tribulationPrep = Math.min(100, Math.floor(prep * 0.4))
        })
        const final = target === Realm.Ascension ? 9407 : tribulationInjureEvent(target)
        return { state: s, eventId: final, eventIds: [...processEvents, final] }
    }

    // 失败两劫以上：本应陨落，但九命/保命类天赋可以挡下
    const totalLives = availableLives(state)
    if (state.tribulationDeaths < totalLives) {
        const s = produce(base, draft => {
            draft.life = 1
            draft.cultivation = Math.floor(prevCultivation * 0.2)
            draft.lifespan = Math.max(1, draft.lifespan - 30)
            draft.tribulationPrep = 0
            draft.tribulationDeaths += 1
        })
        return {
            state: s,
            eventId: NINE_LIVES_EVENT,
            eventIds: [...processEvents, NINE_LIVES_EVENT],
        }
    }

    const s = produce(base, draft => {
        draft.life = 0
        draft.tribulationPrep = 0
    })
    const final = target === Realm.Ascension ? 9507 : tribulationDeathEvent(target)
    return { state: s, eventId: final, eventIds: [...processEvents, final] }
}

/** 是否拥有灵根类天赋 */
export function hasSpiritRootTalent(state: GameState): boolean {
    for (const id of state.talents) {
        if (talents.get(id)?.category === 'spiritRoot') return true
    }
    return false
}
