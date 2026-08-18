import type { Event } from '../event.types'

/**
 * 第七批凡猫事件：低出身专属正面事件。
 * 穷有穷的活法：街头智慧、自由、猫老大、垃圾堆里的惊喜。
 * 条件 MNY 为“出身”，数值越低越容易触发这些事件。
 */
export const eventList: Event[] = [
    { id: 2701, event: '你在街头学会了开罐头，从此不再饿肚子。', grade: 0, include: 'MNY<=3', effect: { INT: 2 } },
    { id: 2702, event: '你发现了一片没人的天台，整片日落都是你的。', grade: 0, include: 'MNY<=3', effect: { SPR: 2 } },
    { id: 2703, event: '你被一群野猫收为徒弟，学会了捕猎和打架。', grade: 1, include: 'MNY<=3', effect: { STR: 1, INT: 1 } },
    { id: 2704, event: '你在垃圾堆后面翻出半条烤鱼，这是你三天来最丰盛的一顿。', grade: 0, include: 'MNY<=4', effect: { STR: 1, SPR: 1 } },
    { id: 2705, event: '你学会了躲避车辆，动作快得像一阵风。', grade: 1, include: 'MNY<=3', effect: { INT: 1, STR: 1 } },
    { id: 2706, event: '你在雨夜找到一处避风港，还收留了一只比你还惨的小猫。', grade: 1, include: 'MNY<=3&HOME=0', effect: { SPR: 2, INT: 1 } },
    { id: 2707, event: '你因为流浪见多识广，见到大狗都不躲了。', grade: 0, include: 'MNY<=4', effect: { INT: 1, SPR: 1 } },
    { id: 2708, event: '你在街头混成了猫中传说，连小吃摊老板都认得你。', grade: 2, include: 'MNY<=3', effect: { CHR: 2, SPR: 1 } },
    { id: 2709, event: '你被一群孩子投喂，他们给你搭了个纸箱小窝。', grade: 0, include: 'MNY<=4', effect: { SPR: 2 } },
    { id: 2710, event: '你发现穷巷子里的老鼠特别肥，你的捕猎技巧突飞猛进。', grade: 0, include: 'MNY<=3&HOME=0', effect: { STR: 2 } },
]
