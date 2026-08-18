/** 修仙境界 */
export enum Realm {
    /** 凡猫（未入道） */
    Mortal = 0,
    /** 炼气 */
    QiRefining = 1,
    /** 筑基 */
    Foundation = 2,
    /** 金丹 */
    GoldenCore = 3,
    /** 元婴 */
    NascentSoul = 4,
    /** 化神 */
    SpiritSevering = 5,
    /** 渡劫 */
    Tribulation = 6,
    /** 飞升 */
    Ascension = 7,
}

/** 仙侠五维 */
export interface ImmortalFive {
    /** 根骨 */
    aptitude: number
    /** 悟性 */
    comprehension: number
    /** 体魄 */
    physique: number
    /** 机缘 */
    fortune: number
    /** 灵韵 */
    spiritCharm: number
}

/** 境界信息 */
export interface RealmInfo {
    /** 境界 */
    readonly realm: Realm
    /** 名称 */
    readonly name: string
    /** 突破到下一境界所需修为 */
    readonly threshold: number
    /** 突破后寿元 */
    readonly lifespan: number
    /** 是否需渡劫 */
    readonly tribulation: boolean
}

/** 境界信息表（0 凡猫无意义，作为占位） */
export const REALMS: RealmInfo[] = [
    { realm: Realm.Mortal, name: '凡猫', threshold: 0, lifespan: 25, tribulation: false },
    { realm: Realm.QiRefining, name: '炼气', threshold: 100, lifespan: 200, tribulation: false },
    { realm: Realm.Foundation, name: '筑基', threshold: 300, lifespan: 400, tribulation: false },
    { realm: Realm.GoldenCore, name: '金丹', threshold: 600, lifespan: 800, tribulation: true },
    { realm: Realm.NascentSoul, name: '元婴', threshold: 1000, lifespan: 1500, tribulation: true },
    { realm: Realm.SpiritSevering, name: '化神', threshold: 2000, lifespan: 3000, tribulation: true },
    { realm: Realm.Tribulation, name: '渡劫', threshold: 4000, lifespan: 5000, tribulation: true },
    { realm: Realm.Ascension, name: '飞升', threshold: Infinity, lifespan: Infinity, tribulation: false },
]

export function realmName(realm: Realm): string {
    return REALMS[realm]?.name ?? '未知'
}
