export * from './talent.types'
export * from './event.types'
export * from './age.types'
export * from './achievement.types'
export * from './character.types'
export * from './specialthanks.types'
export * from './cultivation.types'

import type { Talent } from './talent.types'
import type { Event } from './event.types'
import type { Age } from './age.types'
import type { Achievement } from './achievement.types'
import type { Character } from './character.types'
import type { SpecialThanks } from './specialthanks.types'
import { Realm } from './cultivation.types'
import { talentList } from './content/talents'
import { eventList } from './content/events'
import { ageList } from './content/ages'
import { achievementList } from './content/achievements'
import { characterList } from './content/characters'
import { specialthanksList } from './content/specialthanks'

export const talent = new Map(talentList.map(t => [t.id, t])) as Map<
    Talent['id'],
    Talent
>
export const event = new Map(eventList.map(e => [e.id, e])) as Map<
    Event['id'],
    Event
>
export const age = new Map(ageList.map(a => [a.age, a])) as Map<
    Age['age'],
    Age
>
export const achievement = new Map(
    achievementList.map(a => [a.id, a]),
) as Map<Achievement['id'], Achievement>
export const character = new Map(
    characterList.map(c => [c.id, c]),
) as Map<Character['id'], Character>
export const specialthanks = specialthanksList as SpecialThanks[]

/** 修仙事件按境界分池（weight 统一为 1） */
export const realmEvents = new Map<Realm, [Event['id'], number][]>(
    Array.from({ length: 7 }, (_, i) => {
        const realm = (i + 1) as Realm
        const pool = eventList
            .filter(e => e.realm === realm)
            .map(e => [e.id, 1] as [Event['id'], number])
        return [realm, pool]
    }),
)

export default talent
export {
    talent as talents,
    event as events,
    age as ages,
    achievement as achievements,
    character as characters,
    specialthanks as specialThanks,
}
