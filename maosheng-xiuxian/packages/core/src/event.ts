import { type Event, events } from '@remake/data'
import type { Properties, GameState, ProfileState } from './state'
import { propsEffect, createFlatState, immortalEffect as applyImmortalEffect } from './state'
import { check as checkCondition } from '@remake/condition'
import type { TriggerResult } from './game'
import { produce } from 'immer'

export function check(
    event: Event['id'],
    state: GameState,
    profile: ProfileState,
) {
    const { include, exclude, NoRandom } = events.get(event)!
    if (NoRandom) return false
    const flatState = createFlatState(state, profile)
    if (exclude && checkCondition(flatState, exclude)) return false
    if (include) return checkCondition(flatState, include)
    return true
}

export function trigger(
    eventId: number,
    state: GameState,
    profile: ProfileState,
): TriggerResult<Event['id']> {
    const { effect, immortalEffect, washMarrow, branch } = events.get(eventId)!
    const newState = produce(state, draft => {
        draft.events.add(eventId)
        if (effect) {
            if (effect.LIF) draft.life += effect.LIF
            const pe: Partial<Properties> = {}
            if (effect.CHR) pe.charm = effect.CHR
            if (effect.INT) pe.intelligence = effect.INT
            if (effect.STR) pe.strength = effect.STR
            if (effect.MNY) pe.money = effect.MNY
            if (effect.SPR) pe.spirit = effect.SPR
            if (effect.AGE) pe.age = effect.AGE
            draft.props = propsEffect(draft.props, pe)
            if (effect.SEED) draft.immortalSeed += effect.SEED
            if (effect.DAO) draft.daoInsight += effect.DAO
            if (effect.DEMON) draft.demonHeart += effect.DEMON
            if (effect.STER) draft.sterilized = true
        }
        if (immortalEffect) {
            if (immortalEffect.CULT) draft.cultivation += immortalEffect.CULT
            if (immortalEffect.SE) draft.spiritEnergy += immortalEffect.SE
            if (immortalEffect.DAO) draft.daoInsight += immortalEffect.DAO
            if (immortalEffect.DEMON) draft.demonHeart += immortalEffect.DEMON
            if (immortalEffect.EXPO) draft.exposure = Math.min(100, Math.max(0, draft.exposure + immortalEffect.EXPO))
            if (draft.immortal) {
                const p: Partial<Parameters<typeof applyImmortalEffect>[1]> = {}
                if (immortalEffect.APT) p.aptitude = immortalEffect.APT
                if (immortalEffect.COMP) p.comprehension = immortalEffect.COMP
                if (immortalEffect.PHY) p.physique = immortalEffect.PHY
                if (immortalEffect.FOR) p.fortune = immortalEffect.FOR
                if (immortalEffect.SPC) p.spiritCharm = immortalEffect.SPC
                if (Object.keys(p).length > 0) {
                    draft.immortal = applyImmortalEffect(draft.immortal, p)
                }
            }
        }
        if (washMarrow) draft.pendingImmortalAlloc = true
    })
    const flatState = createFlatState(newState, profile)
    if (branch) {
        for (const { condition, event } of branch) {
            if (checkCondition(flatState, condition)) {
                const result = trigger(event, newState, profile)
                return {
                    state: result.state,
                    triggers: [eventId, ...result.triggers],
                }
            }
        }
    }
    return { state: newState, triggers: [eventId] }
}
