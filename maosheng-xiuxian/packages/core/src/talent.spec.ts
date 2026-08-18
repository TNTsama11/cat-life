import { expect, test, describe } from 'bun:test'
import { pull, additionalPoints } from './talent'
import { talents } from '@remake/data'

const profile = (over: Record<string, unknown> = {}) => ({
    times: 0,
    talents: new Set<number>(),
    events: new Set<number>(),
    achievements: new Set<number>(),
    ...over,
})

const rate = {
    base: new Map([[0, 889], [1, 100], [2, 10], [3, 1]]),
    additions: {},
}

describe('Talent', () => {
    test('凡猫池不含修仙天赋', () => {
        const result = pull({ count: 100, rate, immortal: false }, profile())
        for (const id of result) {
            expect(talents.get(id)!.category).not.toBe('immortal')
        }
    })

    test('修仙池只含修仙天赋', () => {
        const result = pull({ count: 100, rate, immortal: true }, profile())
        for (const id of result) {
            expect(talents.get(id)!.category).toBe('immortal')
        }
    })

    test('灵根类天赋为高稀有度', () => {
        const roots = Array.from(talents.values()).filter(
            t => t.category === 'spiritRoot',
        )
        expect(roots.length).toBeGreaterThan(0)
        expect(roots.every(t => t.grade >= 2)).toBe(true)
    })

    test('additionalPoints 统计加点天赋', () => {
        // 1001 橘猫基因无 points；需要找一个带 points 的天赋（原版机制，本作暂无）
        const result = additionalPoints([1001, 1002])
        expect(result.points).toBe(0)
    })
})
