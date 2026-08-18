/** 修仙境界 */
export enum Realm {
    /** 凡猫（未入道） */
    Mortal = 0,
    /** 开灵（人修称炼气） */
    QiRefining = 1,
    /** 凝脉（人修称筑基） */
    Foundation = 2,
    /** 结丹（人修称金丹） */
    GoldenCore = 3,
    /** 化形（人修称元婴） */
    NascentSoul = 4,
    /** 通神（人修称化神） */
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
    /** 猫修名称（主显示） */
    readonly name: string
    /** 人修对应的叫法（同样的境界，不同的路子） */
    readonly humanName: string
    /** 突破到下一境界所需修为 */
    readonly threshold: number
    /** 突破后寿元 */
    readonly lifespan: number
    /** 是否需渡劫 */
    readonly tribulation: boolean
}

/** 境界信息表（0 凡猫无意义，作为占位） */
export const REALMS: RealmInfo[] = [
    { realm: Realm.Mortal, name: '凡猫', humanName: '凡猫', threshold: 0, lifespan: 25, tribulation: false },
    { realm: Realm.QiRefining, name: '开灵', humanName: '炼气', threshold: 100, lifespan: 200, tribulation: false },
    { realm: Realm.Foundation, name: '凝脉', humanName: '筑基', threshold: 300, lifespan: 400, tribulation: false },
    { realm: Realm.GoldenCore, name: '结丹', humanName: '金丹', threshold: 600, lifespan: 800, tribulation: true },
    { realm: Realm.NascentSoul, name: '化形', humanName: '元婴', threshold: 1000, lifespan: 1500, tribulation: true },
    { realm: Realm.SpiritSevering, name: '通神', humanName: '化神', threshold: 2000, lifespan: 3000, tribulation: true },
    { realm: Realm.Tribulation, name: '渡劫', humanName: '渡劫', threshold: 4000, lifespan: 5000, tribulation: true },
    { realm: Realm.Ascension, name: '飞升', humanName: '飞升', threshold: Infinity, lifespan: Infinity, tribulation: false },
]

export function realmName(realm: Realm): string {
    return REALMS[realm]?.name ?? '未知'
}
