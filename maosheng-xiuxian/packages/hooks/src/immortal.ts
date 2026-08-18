import { useCallback } from 'react'
import { atom, useAtomValue, useSetAtom } from 'jotai'
import { applyImmortal, pull } from '@remake/core'
import type { ImmortalAllocation } from '@remake/core'
import { useConfig, useProfile, useGameState, useSetGameState } from '.'
import { useSetStep, Step } from './play'
import { keys, shuffle, zoneFit, random } from '@remake/vitex'
import type { RNG } from '@remake/vitex'

const init: ImmortalAllocation = {
    aptitude: 0,
    comprehension: 0,
    physique: 0,
    fortune: 0,
    spiritCharm: 0,
}
export const immortalAllocAtom = atom<ImmortalAllocation>({ ...init })

const alloced = (a: ImmortalAllocation) =>
    Object.values(a).reduce((x, y) => x + y, 0)

export const useImmortalReset = () => {
    const set = useSetAtom(immortalAllocAtom)
    return useCallback(() => set({ ...init }), [set])
}

export const useImmortalAlloc = () => useAtomValue(immortalAllocAtom)

export const useImmortalPoints = () => {
    const { points } = useConfig()
    const alloc = useAtomValue(immortalAllocAtom)
    return {
        total: points,
        alloced: alloced(alloc),
        left: points - alloced(alloc),
    }
}

export const useImmortalAllocator = () => {
    const { points, allocate } = useConfig()
    const set = useSetAtom(immortalAllocAtom)
    const allocator = useCallback(
        (key: keyof ImmortalAllocation, value: number) => {
            set(prev => {
                const last = prev[key]
                const left = points - alloced(prev) + last
                const max = zoneFit(left, [0, allocate])
                const final = zoneFit(value, [0, max])
                if (last === final) return prev
                return { ...prev, [key]: final }
            })
        },
        [points, allocate, set],
    )
    return [useAtomValue(immortalAllocAtom), allocator] as const
}

export const useImmortalRandomizer = () => {
    const { points, allocate } = useConfig()
    const set = useSetAtom(immortalAllocAtom)
    return useCallback(
        (rng?: RNG) => {
            const shuffled = shuffle(keys(init), rng)
            let left = points
            const alloc = { ...init }
            while (shuffled.length) {
                const key = shuffled.pop()!
                const n = shuffled.length
                const max = zoneFit(allocate, [0, left])
                const min = zoneFit(left - n * allocate, [0, allocate])
                const value = random(max, min, rng)
                alloc[key] = value
                left -= value
            }
            set(alloc)
        },
        [points, allocate, set],
    )
}

export const useImmortalSubmit = () => {
    const { pull: pullOpts } = useConfig()
    const [profile] = useProfile()
    const state = useGameState()
    const setState = useSetGameState()
    const setStep = useSetStep()
    const alloc = useAtomValue(immortalAllocAtom)
    const reset = useSetAtom(immortalAllocAtom)
    return useCallback(() => {
        if (!state) return
        const immortal = pull(
            { ...pullOpts, count: 3, immortal: true },
            { ...profile, locked: undefined },
        )
        const s = applyImmortal(state, alloc)
        setState({ ...s, talents: new Set([...s.talents, ...immortal]) })
        reset({ ...init })
        setStep(Step.Play)
    }, [state, profile, pullOpts, alloc, setState, reset, setStep])
}
