import type { Achievement, Event, Talent } from '@remake/data'
import type { ImmortalFive, Realm } from '@remake/data'
import { produce } from 'immer'
import { sum, keys } from '@remake/vitex'

/** 基础的属性（凡猫五维） */
export interface Properties {
    age: number
    charm: number
    intelligence: number
    strength: number
    money: number
    spirit: number
}

export interface HLProperties {
    current: Properties // 当前属性
    highest: Properties // 历史最高属性
    lowest: Properties // 历史最低属性
}

/** 仙侠五维历史极值 */
export interface HLImmortalFive {
    current: ImmortalFive
    highest: ImmortalFive
    lowest: ImmortalFive
}

export type Allocation = Omit<Properties, 'age'>
export type ImmortalAllocation = ImmortalFive

export function createProperties(allocation: Allocation) {
    return { ...allocation, age: -1 }
}

export function createHLProperties(allocation: Allocation) {
    const current = createProperties(allocation)
    return { current, highest: { ...current }, lowest: { ...current } }
}

export function createImmortalFive(allocation: ImmortalAllocation) {
    return { ...allocation }
}

export function createHLImmortalFive(allocation: ImmortalAllocation) {
    const current = createImmortalFive(allocation)
    return { current, highest: { ...current }, lowest: { ...current } }
}

/** 本局所处阶段 */
export type Phase = 'mortal' | 'immortal'

export interface GameState {
    props: HLProperties // 凡猫五维
    life: number // 本局生命值（1 存活，0 死亡）
    adopted: boolean // 是否被人收养（false 为流浪/野猫）
    gender: 'male' | 'female' // 性别：公猫 / 母猫
    romanceEnabled: boolean // 是否开启情感/生育事件
    sterilized: boolean // 是否已绝育
    habitat: 'wild' | 'rural' | 'urban' // 生活环境：流浪 / 农村家猫 / 城市家猫
    talents: Set<Talent['id']> // 本局拥有的天赋
    events: Set<Event['id']> // 本局触发过的事件
    achievements: Set<Achievement['id']> // 本局达成的成就
    talentTriggers: Map<Talent['id'], number> // 本局天赋触发次数
    // —— 修仙状态 ——
    phase: Phase // 凡猫 / 修仙
    realm: Realm // 境界
    cultivation: number // 修为
    spiritEnergy: number // 灵气
    lifespan: number // 寿元（年龄上限）
    immortal: HLImmortalFive | null // 仙侠五维（洗髓前为 null）
    pendingImmortalAlloc: boolean // 待洗点（伐骨洗髓后）
    tribulation: number // 已渡劫次数
    // —— 新增成长维度 ——
    immortalSeed: number // 仙缘线索（凡猫阶段铺垫）
    daoInsight: number // 道韵（悟道积累）
    demonHeart: number // 心魔（修仙负面积累）
    exposure: number // 妖踪暴露度（0 藏得好 ~ 100 人尽皆知）
    stance: 'hide' | 'fame' // 藏拙 / 扬名
    // —— 瓶颈与渡劫准备 ——
    bottleneck: boolean // 修为已满，等待突破
    breakthroughAction: 'none' | 'breakthrough' | 'cultivate' | 'seek' // 瓶颈期选择
    tribulationPrep: number // 渡劫准备度（0~100）
    karma: number // 业力/善缘（-100 恶 ~ +100 善）
}

/** 持久化存储的数据 */
export interface ProfileState {
    times: number // 游戏次数
    locked?: Talent['id'][] // 锁定的天赋
    talents: Set<Talent['id']> // 拥有过的天赋
    events: Set<Event['id']> // 触发过的事件
    achievements: Set<Achievement['id']> // 达成的成就
    highest?: Properties // 历史最高属性
    lowest?: Properties // 历史最低属性
    highestRealm?: Realm // 历史最高境界
}

export function createState(
    allocation: Allocation,
    talents?: Iterable<Talent['id']>,
): GameState {
    return {
        props: createHLProperties(allocation),
        life: 1,
        adopted: false,
        gender: 'male',
        romanceEnabled: true,
        sterilized: false,
        habitat: 'wild',
        talents: new Set(talents),
        events: new Set(),
        achievements: new Set(),
        talentTriggers: new Map(),
        phase: 'mortal',
        realm: 0,
        cultivation: 0,
        spiritEnergy: 0,
        lifespan: 25,
        immortal: null,
        pendingImmortalAlloc: false,
        tribulation: 0,
        immortalSeed: 0,
        daoInsight: 0,
        demonHeart: 0,
        exposure: 0,
        stance: 'hide',
        bottleneck: false,
        breakthroughAction: 'none',
        tribulationPrep: 0,
        karma: 0,
    }
}

export function summary({ props, realm }: GameState) {
    const { age, ...others } = props.highest
    const s = sum(Object.values(others))
    return Math.floor(s * 2 + age / 2 + (realm ?? 0) * 100)
}

export interface FlatState {
    AGE: GameState['props']['current']['age']
    CHR: GameState['props']['current']['charm']
    INT: GameState['props']['current']['intelligence']
    STR: GameState['props']['current']['strength']
    MNY: GameState['props']['current']['money']
    SPR: GameState['props']['current']['spirit']
    HAGE: GameState['props']['highest']['age']
    HCHR: GameState['props']['highest']['charm']
    HINT: GameState['props']['highest']['intelligence']
    HSTR: GameState['props']['highest']['strength']
    HMNY: GameState['props']['highest']['money']
    HSPR: GameState['props']['highest']['spirit']
    LAGE: GameState['props']['lowest']['age']
    LCHR: GameState['props']['lowest']['charm']
    LINT: GameState['props']['lowest']['intelligence']
    LSTR: GameState['props']['lowest']['strength']
    LMNY: GameState['props']['lowest']['money']
    LSPR: GameState['props']['lowest']['spirit']
    LIF: GameState['life']
    TLT: GameState['talents']
    EVT: GameState['events']

    TMS: ProfileState['times']
    AEVT: ProfileState['events']
    ATLT: ProfileState['talents']
    AACH: ProfileState['achievements']

    SUM: number

    // 集合规模（供成就条件使用）
    TLTN: number // 本局天赋数
    EVTN: number // 本局事件数
    ATLTN: number // 累计天赋数
    AEVTN: number // 累计事件数
    AACHN: number // 累计成就数

    // —— 修仙状态 ——
    PHASE: number // 0 凡猫 1 修仙
    REALM: number // 境界
    CULT: number // 修为
    SE: number // 灵气
    LIFE: number // 寿元
    TRIB: number // 渡劫次数
    APT: number // 根骨
    COMP: number // 悟性
    PHY: number // 体魄
    FOR: number // 机缘
    SPC: number // 灵韵
    HOME: number // 0 流浪 1 家养
    SEED: number // 仙缘线索
    DAO: number // 道韵
    DEMON: number // 心魔
    EXPO: number // 妖踪暴露度
    SEX: number // 0 公猫 1 母猫
    ROM: number // 1 开启情感/生育事件
    STER: number // 1 已绝育
    HAB: number // 0 流浪 1 农村家猫 2 城市家猫
    PREP: number // 渡劫准备度
    KARMA: number // 业力/善缘
}

type FlatStateKey = keyof FlatState

interface FlatTarget {
    game: GameState
    profile: ProfileState
}

type FlatMapper<Key extends FlatStateKey> = (
    state: FlatTarget,
) => FlatState[Key]

const FlatMappers: { [Key in FlatStateKey]: FlatMapper<Key> } = {
    AGE: state => state.game.props.current.age,
    CHR: state => state.game.props.current.charm,
    INT: state => state.game.props.current.intelligence,
    STR: state => state.game.props.current.strength,
    MNY: state => state.game.props.current.money,
    SPR: state => state.game.props.current.spirit,
    HAGE: state => state.game.props.highest.age,
    HCHR: state => state.game.props.highest.charm,
    HINT: state => state.game.props.highest.intelligence,
    HSTR: state => state.game.props.highest.strength,
    HMNY: state => state.game.props.highest.money,
    HSPR: state => state.game.props.highest.spirit,
    LAGE: state => state.game.props.lowest.age,
    LCHR: state => state.game.props.lowest.charm,
    LINT: state => state.game.props.lowest.intelligence,
    LSTR: state => state.game.props.lowest.strength,
    LMNY: state => state.game.props.lowest.money,
    LSPR: state => state.game.props.lowest.spirit,
    LIF: state => state.game.life,
    TLT: state => state.game.talents,
    EVT: state => state.game.events,
    TMS: state => state.profile.times,
    AEVT: state => state.profile.events,
    ATLT: state => state.profile.talents,
    AACH: state => state.profile.achievements,
    SUM: ({ game }) => summary(game),
    TLTN: state => state.game.talents.size,
    EVTN: state => state.game.events.size,
    ATLTN: state => state.profile.talents.size,
    AEVTN: state => state.profile.events.size,
    AACHN: state => state.profile.achievements.size,
    PHASE: state => (state.game.phase === 'immortal' ? 1 : 0),
    REALM: state => state.game.realm,
    CULT: state => state.game.cultivation,
    SE: state => state.game.spiritEnergy,
    LIFE: state => state.game.lifespan,
    TRIB: state => state.game.tribulation,
    APT: state => state.game.immortal?.current.aptitude ?? 0,
    COMP: state => state.game.immortal?.current.comprehension ?? 0,
    PHY: state => state.game.immortal?.current.physique ?? 0,
    FOR: state => state.game.immortal?.current.fortune ?? 0,
    SPC: state => state.game.immortal?.current.spiritCharm ?? 0,
    HOME: state => (state.game.adopted ? 1 : 0),
    SEED: state => state.game.immortalSeed ?? 0,
    DAO: state => state.game.daoInsight ?? 0,
    DEMON: state => state.game.demonHeart ?? 0,
    EXPO: state => state.game.exposure ?? 0,
    SEX: state => (state.game.gender === 'female' ? 1 : 0),
    ROM: state => (state.game.romanceEnabled === false ? 0 : 1),
    STER: state => (state.game.sterilized ? 1 : 0),
    HAB: state =>
        state.game.habitat === 'urban' ? 2 : state.game.habitat === 'rural' ? 1 : 0,
    PREP: state => state.game.tribulationPrep ?? 0,
    KARMA: state => state.game.karma ?? 0,
}

export const SupportedFlatStateKeys = new Set(keys(FlatMappers))

const flatStateHandle = {
    get<Key extends FlatStateKey>(target: FlatTarget, prop: Key) {
        return FlatMappers[prop]?.(target)
    },
    set: () => true,
}

export function createFlatState(game: GameState, profile: ProfileState) {
    return new Proxy({ game, profile }, flatStateHandle) as unknown as FlatState
}

export function propsEffect(hlp: HLProperties, effect: Partial<Properties>) {
    return produce(hlp, draft => {
        for (const key in effect) {
            const prop = key as keyof Properties
            const value = effect[prop]!
            draft.current[prop] += value
            draft.highest[prop] = Math.max(
                draft.highest[prop],
                draft.current[prop],
            )
            draft.lowest[prop] = Math.min(
                draft.lowest[prop],
                draft.current[prop],
            )
        }
    })
}

export function immortalEffect(
    hlf: HLImmortalFive,
    effect: Partial<ImmortalFive>,
) {
    return produce(hlf, draft => {
        for (const key in effect) {
            const prop = key as keyof ImmortalFive
            const value = effect[prop]!
            draft.current[prop] += value
            draft.highest[prop] = Math.max(
                draft.highest[prop],
                draft.current[prop],
            )
            draft.lowest[prop] = Math.min(
                draft.lowest[prop],
                draft.current[prop],
            )
        }
    })
}

export function highestProperties(a: Properties, b?: Properties): Properties {
    if (!b) return { ...a }
    const result = {} as Properties
    for (const key of keys(a)) {
        result[key] = Math.max(a[key], b[key])
    }
    return result
}

export function lowestProperties(a: Properties, b?: Properties): Properties {
    if (!b) return { ...a }
    const result = {} as Properties
    for (const key of keys(a)) {
        result[key] = Math.min(a[key], b[key])
    }
    return result
}

export function nextProfile(
    profile: ProfileState,
    state: GameState,
    locked?: Talent['id'][],
): ProfileState {
    return {
        times: profile.times + 1,
        talents: profile.talents.union(state.talents),
        events: profile.events.union(state.events),
        achievements: profile.achievements.union(state.achievements),
        highest: highestProperties(state.props.highest, profile.highest),
        lowest: lowestProperties(state.props.lowest, profile.lowest),
        highestRealm: Math.max(profile.highestRealm ?? 0, state.realm),
        locked,
    }
}
