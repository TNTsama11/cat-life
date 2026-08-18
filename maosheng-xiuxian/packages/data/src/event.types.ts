import type { Realm } from './cultivation.types'

/** 事件稀有度 */
export type EventGrade = 0 | 1 | 2 | 3

/** 事件效果 */
export type EventEffect = {
    /** 颜值变化 */
    readonly CHR?: number
    /** 智力变化 */
    readonly INT?: number
    /** 体质变化 */
    readonly STR?: number
    /** 家境变化 */
    readonly MNY?: number
    /** 快乐变化 */
    readonly SPR?: number
    /** 寿命变化 */
    readonly LIF?: number
    /** 年龄变化 */
    readonly AGE?: number
}

/** 分支路线 */
export type EventBranch = {
    /** 分支条件 */
    condition: string
    /** 分支事件ID */
    event: number
}

/** 事件 */
export type Event = {
    /** ID */
    readonly id: number
    /** 事件内容 */
    readonly event: string
    /** 事件稀有度 */
    readonly grade: EventGrade
    /** 追加事件内容 */
    readonly postEvent?: string
    /** 事件效果 */
    readonly effect?: EventEffect
    /** 非随机事件 */
    readonly NoRandom?: boolean
    /** 有某事件时才能被随机到 */
    readonly include?: string
    /** 有某事件时一定随机不到 */
    readonly exclude?: string
    /** 分支路线 */
    readonly branch?: EventBranch[]
    /** 是否需要格式化 */
    readonly format?: boolean
    /** 所属境界（凡猫事件为 Realm.Mortal / 省略；1~6 为修仙事件按境界分池） */
    readonly realm?: Realm
    /** 修仙效果（修为/灵气变化） */
    readonly immortalEffect?: {
        /** 修为变化 */
        readonly CULT?: number
        /** 灵气变化 */
        readonly SE?: number
    }
    /** 伐骨洗髓交互事件 */
    readonly washMarrow?: boolean
    /** 突破事件 */
    readonly breakthrough?: boolean
    /** 渡劫事件 */
    readonly tribulation?: boolean
    /** 飞升事件 */
    readonly ascension?: boolean
}
