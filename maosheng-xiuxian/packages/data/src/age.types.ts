/** 权重事件 */
export type EventWithWeight = [number, number]

/** 年龄 */
export type Age = {
    /** 年龄 */
    readonly age: number
    /** 事件池 */
    readonly event: EventWithWeight[]
}
