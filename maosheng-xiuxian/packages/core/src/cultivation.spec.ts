import { expect, test, describe } from 'bun:test'
import { createState } from './state'
import { applyImmortal } from './game'
import {
    cultivationGain,
    shouldBreakthrough,
    doBreakthrough,
    ASCENSION_EVENT,
} from './cultivation'
import { Realm, REALMS } from '@remake/data'

const alloc = { charm: 5, intelligence: 5, strength: 5, money: 5, spirit: 5 }

const mkImmortal = (apt = 10, comp = 10, phy = 10, fort = 10) => {
    let s = createState(alloc)
    s = { ...s, pendingImmortalAlloc: true }
    return applyImmortal(s, {
        aptitude: apt,
        comprehension: comp,
        physique: phy,
        fortune: fort,
        spiritCharm: 5,
    })
}

describe('Cultivation', () => {
    test('凡猫阶段不产生修为', () => {
        expect(cultivationGain(createState(alloc))).toBe(0)
    })

    test('修仙阶段产生修为', () => {
        expect(cultivationGain(mkImmortal())).toBeGreaterThan(0)
    })

    test('修为满时应当突破', () => {
        const s = { ...mkImmortal(), cultivation: REALMS[1]!.threshold }
        expect(shouldBreakthrough(s)).toBe(true)
    })

    test('高资质突破成功', () => {
        const s = { ...mkImmortal(), cultivation: REALMS[1]!.threshold }
        const r = doBreakthrough(s, () => 1)
        expect(r.state.realm).toBe(Realm.Foundation)
    })

    test('低资质突破失败', () => {
        const s = {
            ...mkImmortal(0, 0, 0, 0),
            cultivation: REALMS[1]!.threshold,
        }
        const r = doBreakthrough(s, () => 100)
        expect(r.state.realm).toBe(Realm.QiRefining)
    })

    test('渡劫境突破至飞升', () => {
        const s = {
            ...mkImmortal(),
            realm: Realm.Tribulation,
            cultivation: REALMS[6]!.threshold,
        }
        const r = doBreakthrough(s, () => 1)
        expect(r.state.realm).toBe(Realm.Ascension)
        expect(r.eventId).toBe(ASCENSION_EVENT)
    })
})
