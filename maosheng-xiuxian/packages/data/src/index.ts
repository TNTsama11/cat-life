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
import { talentList as talentListExtra } from './content/talents-extra'
import { eventList } from './content/events'
import { eventList as eventListImmortal } from './content/events-immortal'
import { eventList as eventListMortal } from './content/events-mortal'
import { eventList as eventListImmortal2 } from './content/events-immortal2'
import { eventList as eventListMortal2 } from './content/events-mortal2'
import { eventList as eventListImmortal3 } from './content/events-immortal3'
import { eventList as eventListMortal3 } from './content/events-mortal3'
import { eventList as eventListImmortal4 } from './content/events-immortal4'
import { eventList as eventListMortal4 } from './content/events-mortal4'
import { eventList as eventListImmortal5 } from './content/events-immortal5'
import { eventList as eventListImmortal6 } from './content/events-immortal6'
import { eventList as eventListImmortal7 } from './content/events-immortal7'
import { eventList as eventListMortal5 } from './content/events-mortal5'
import { ageList } from './content/ages'
import { achievementList } from './content/achievements'
import { achievementList as achievementListExtra } from './content/achievements-extra'
import { achievementList as achievementListExtra2 } from './content/achievements-extra2'
import { characterList } from './content/characters'
import { specialthanksList } from './content/specialthanks'

const allEvents: Event[] = [
    ...eventList,
    ...eventListImmortal,
    ...eventListMortal,
    ...eventListImmortal2,
    ...eventListMortal2,
    ...eventListImmortal3,
    ...eventListMortal3,
    ...eventListImmortal4,
    ...eventListMortal4,
    ...eventListImmortal5,
    ...eventListImmortal6,
    ...eventListImmortal7,
    ...eventListMortal5,
]

const allTalents: Talent[] = [...talentList, ...talentListExtra]

export const talent = new Map(allTalents.map(t => [t.id, t])) as Map<
    Talent['id'],
    Talent
>
export const event = new Map(allEvents.map(e => [e.id, e])) as Map<
    Event['id'],
    Event
>
export const age = new Map(ageList.map(a => [a.age, a])) as Map<
    Age['age'],
    Age
>
const allAchievements: Achievement[] = [
    ...achievementList,
    ...achievementListExtra,
    ...achievementListExtra2,
]

export const achievement = new Map(
    allAchievements.map(a => [a.id, a]),
) as Map<Achievement['id'], Achievement>
export const character = new Map(
    characterList.map(c => [c.id, c]),
) as Map<Character['id'], Character>
export const specialthanks = specialthanksList as SpecialThanks[]

/** 修仙事件按境界分池（weight 统一为 1） */
export const realmEvents = new Map<Realm, [Event['id'], number][]>(
    Array.from({ length: 7 }, (_, i) => {
        const realm = (i + 1) as Realm
        const pool = allEvents
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
