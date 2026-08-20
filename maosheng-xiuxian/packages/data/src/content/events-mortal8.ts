import type { Event } from '../event.types'

/**
 * 第八批凡猫事件：猫行为事件链。
 * 首个事件登记进 ages.ts，后续事件通过 branch 在同一年内连播。
 */
export const eventList: Event[] = [
    { id: 2801, event: '你在墙角发现了一个崭新的纸箱。', grade: 0, effect: { SPR: 1 }, branch: [{ condition: 'HOME=1', event: 2802 }, { condition: 'HOME=0', event: 2803 }] },
    { id: 2802, event: '你钻了进去，把纸箱当成了堡垒，谁来都不出来。', grade: 0, effect: { SPR: 2 } },
    { id: 2803, event: '你钻了进去，把纸箱当成了今晚的避风港。', grade: 0, effect: { SPR: 2, STR: 1 } },

    { id: 2804, event: '你盯上了窗外的小鸟，伏低身子，尾巴一甩一甩。', grade: 0, effect: { INT: 1 }, branch: [{ condition: 'STR>=5', event: 2805 }, { condition: 'STR<5', event: 2806 }] },
    { id: 2805, event: '你瞅准时机扑了出去，居然真的抓到了。', grade: 1, effect: { INT: 2, STR: 1 } },
    { id: 2806, event: '你扑了个空，小鸟飞走了，你假装什么事都没发生。', grade: 0, effect: { SPR: 1 } },

    { id: 2807, event: '你闻到厨房飘来鱼香，开始认真思考猫生大计。', grade: 0, effect: { INT: 1 }, branch: [{ condition: 'HOME=1', event: 2808 }, { condition: 'HOME=0', event: 2809 }] },
    { id: 2808, event: '你蹲在厨房门口喵喵叫，主人心软，分了你半条鱼。', grade: 0, effect: { SPR: 2 } },
    { id: 2809, event: '你从后巷绕进厨房，成功偷到半条鱼，撒腿就跑。', grade: 0, effect: { STR: 1, SPR: 2 } },
]
