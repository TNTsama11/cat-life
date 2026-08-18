import { expect, test, describe } from 'bun:test'
import { start, next, applyImmortal } from './game'
import { Realm } from '@remake/data'

const alloc = { charm: 5, intelligence: 5, strength: 5, money: 5, spirit: 5 }
const profile = {
    times: 0,
    talents: new Set<number>(),
    events: new Set<number>(),
    achievements: new Set<number>(),
}

describe('Game', () => {
    test('start 进入凡猫阶段', () => {
        const r = start(profile, alloc, [1201])
        expect(r.state.phase).toBe('mortal')
        expect(r.state.realm).toBe(Realm.Mortal)
    })

    test('凡猫阶段 next 循环不崩', () => {
        let s = start(profile, alloc, []).state
        for (let i = 0; i < 30; i++) {
            const r = next(s, profile)
            s = r.state
            if (r.end) break
        }
        expect(s.life).toBeLessThanOrEqual(1)
    })

    test('灵根猫在 3~6 岁触发伐骨洗髓', () => {
        let s = start(profile, alloc, [1201]).state
        let wash = false
        for (let i = 0; i < 12; i++) {
            const r = next(s, profile)
            s = r.state
            if (r.washMarrow) {
                wash = true
                break
            }
        }
        expect(wash).toBe(true)
    })

    test('applyImmortal 踏入炼气', () => {
        let s = start(profile, alloc, [1201]).state
        s = { ...s, pendingImmortalAlloc: true }
        const si = applyImmortal(s, {
            aptitude: 8,
            comprehension: 8,
            physique: 5,
            fortune: 5,
            spiritCharm: 5,
        })
        expect(si.phase).toBe('immortal')
        expect(si.realm).toBe(Realm.QiRefining)
        expect(si.immortal!.current.aptitude).toBe(8)
        expect(si.pendingImmortalAlloc).toBe(false)
    })

    test('修仙阶段 next 循环不崩', () => {
        let s = start(profile, alloc, [1201]).state
        s = { ...s, pendingImmortalAlloc: true }
        s = applyImmortal(s, {
            aptitude: 10,
            comprehension: 10,
            physique: 10,
            fortune: 10,
            spiritCharm: 10,
        })
        for (let i = 0; i < 200; i++) {
            const r = next(s, profile)
            s = r.state
            if (r.end) break
        }
        expect(s.realm).toBeGreaterThanOrEqual(Realm.QiRefining)
    })
})
