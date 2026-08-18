import { expect, test, describe } from 'bun:test'
import { trigger, check } from './event'
import { createState } from './state'

const alloc = { charm: 5, intelligence: 5, strength: 5, money: 5, spirit: 5 }
const profile = {
    times: 0,
    talents: new Set<number>(),
    events: new Set<number>(),
    achievements: new Set<number>(),
}

describe('Event', () => {
    test('凡猫事件效果（颜值变化）', () => {
        const state = createState(alloc)
        const result = trigger(2002, state, profile) // 第一次睁眼 CHR+1
        expect(result.state.props.current.charm).toBe(6)
        expect(result.triggers).toContain(2002)
    })

    test('修仙事件效果（修为变化）', () => {
        const state = { ...createState(alloc), phase: 'immortal' as const }
        const result = trigger(3002, state, profile) // 引气入体 CULT+8
        expect(result.state.cultivation).toBe(8)
    })

    test('年龄变化效果', () => {
        const state = createState(alloc)
        const result = trigger(3207, state, profile) // 闭关十年 AGE+10
        expect(result.state.props.current.age).toBe(9)
    })

    test('伐骨洗髓事件设置待洗点', () => {
        const state = createState(alloc)
        const result = trigger(9000, state, profile)
        expect(result.state.pendingImmortalAlloc).toBe(true)
    })

    test('check 过滤死亡事件后仍可随机', () => {
        const state = createState(alloc)
        expect(check(2001, state, profile)).toBe(true)
    })
})
