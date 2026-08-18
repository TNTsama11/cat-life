import { expect, test, describe } from 'bun:test'
import { trigger } from './achievement'
import { createState } from './state'
import { applyImmortal } from './game'
import { AchievementOpportunity as O, Realm } from '@remake/data'

const alloc = { charm: 5, intelligence: 5, strength: 5, money: 5, spirit: 5 }
const profile = {
    times: 0,
    talents: new Set<number>(),
    events: new Set<number>(),
    achievements: new Set<number>(),
}

describe('Achievement', () => {
    test('START 触发喵生初啼', () => {
        const r = trigger(O.Start, createState(alloc), profile)
        expect(r.triggers).toContain(1001)
    })

    test('修仙境界成就', () => {
        let s = createState(alloc)
        s = { ...s, pendingImmortalAlloc: true }
        s = applyImmortal(s, {
            aptitude: 5,
            comprehension: 5,
            physique: 5,
            fortune: 5,
            spiritCharm: 5,
        })
        s = { ...s, realm: Realm.Foundation }
        const r = trigger(O.Trajectory, s, profile)
        expect(r.triggers).toContain(1103)
    })
})
