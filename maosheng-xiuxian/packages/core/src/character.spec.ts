import { expect, test, describe } from 'bun:test'
import { pullChara, startChara, uniqueGenerate } from './character'

describe('Character', () => {
    test('pull 3 个名猫', () => {
        const r = pullChara({ count: 3, knife: 10 }, { times: 0, drawns: new Map() })
        expect(r.characters.length).toBe(3)
        expect(r.characters.every(id => id != null)).toBe(true)
    })

    test('startChara 转换属性', () => {
        const r = startChara(1)
        expect(r.allocation.charm).toBe(7)
    })

    test('uniqueGenerate 生成唯一猫', () => {
        const r = uniqueGenerate({ prop: [[0, 1], [5, 5], [10, 1]], talent: [[1, 5], [3, 1]] })
        expect(r.property.CHR).toBeGreaterThanOrEqual(0)
        expect(Array.isArray(r.talent)).toBe(true)
    })
})
