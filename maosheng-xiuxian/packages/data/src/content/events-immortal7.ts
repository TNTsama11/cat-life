import type { Event } from '../event.types'

/**
 * 第七批修仙事件：围绕“猫身份”在修仙世界中的正负面体验。
 * 世界仍以人修为主，猫是少数派：有时因猫身得便利，有时因猫身被欺辱。
 * ID 9801~9830，按境界分池。
 */
export const eventList: Event[] = [
    // ============ 开灵（realm 1） ============
    { id: 9801, event: '你钻进一个只有猫能过的小石缝，里面竟长着一株沾着露水的灵草。', grade: 1, realm: 1, immortalEffect: { CULT: 12, SE: 5 } },
    { id: 9802, event: '你发现自己的呼噜声能安抚一只暴躁的灵鼠，它送你半颗灵豆当谢礼。', grade: 1, realm: 1, immortalEffect: { CULT: 8, SE: 4, DAO: 1 } },
    { id: 9803, event: '你偷吃仙门后厨的鱼，被烧火小童抓住，挨了一扫帚，还损失了几缕灵气。', grade: 0, realm: 1, effect: { STR: -1 }, immortalEffect: { CULT: -5 } },
    { id: 9804, event: '几个外门弟子见你会吐纳，笑你「猫也能修仙？」你低头舔爪，懒得解释。', grade: 0, realm: 1, immortalEffect: { CULT: 3, DEMON: 1 } },
    { id: 9805, event: '你被一位爱猫的女修捡去洗澡，你挣扎得像被杀的猫，但她事后塞了你一块灵石。', grade: 1, realm: 1, effect: { SPR: 1 }, immortalEffect: { SE: 8 } },

    // ============ 凝脉（realm 2） ============
    { id: 9806, event: '你帮宗门粮仓抓光了偷吃灵米的鼠妖，管库长老破例许你每月领一份灵米。', grade: 2, realm: 2, immortalEffect: { CULT: 20, SE: 10, DAO: 1 } },
    { id: 9807, event: '你的猫瞳夜能视物，在黑风渊里捡到一株夜里发光的灵草。', grade: 1, realm: 2, immortalEffect: { CULT: 18, SE: 12 } },
    { id: 9808, event: '你被一个筑基修士当成普通野猫踢了一脚。你记住了他的味道，也记住了这份屈辱。', grade: 0, realm: 2, effect: { STR: -1 }, immortalEffect: { DEMON: 1 } },
    { id: 9809, event: '有人造谣说「猫妖偷宝」，你被追得在房梁上蹲了三天，才等来清白。', grade: 1, realm: 2, immortalEffect: { CULT: -8, DEMON: 2, EXPO: 5 } },
    { id: 9810, event: '你发现猫薄荷能助你入定，可惜每次醒来都流了一地口水。', grade: 1, realm: 2, immortalEffect: { CULT: 16, DAO: 1 } },

    // ============ 结丹（realm 3） ============
    { id: 9811, event: '你的妖丹引来一只结丹期的猫妖前辈，他教你一套「猫族结丹法」。', grade: 2, realm: 3, immortalEffect: { CULT: 32, DAO: 2 } },
    { id: 9812, event: '你在人族的猫仙祠里吸收香火愿力，修为精进。', grade: 2, realm: 3, immortalEffect: { CULT: 30, SE: 15 } },
    { id: 9813, event: '一个结丹修士见你妖丹圆润，起了夺丹之心。你逃了三天三夜，才甩掉他。', grade: 2, realm: 3, effect: { STR: -2 }, immortalEffect: { CULT: -15, DEMON: 2 } },
    { id: 9814, event: '你被请去除鼠妖，结果鼠妖说你「出卖同族」。你忽然不知道自己是猫是妖还是人。', grade: 1, realm: 3, immortalEffect: { CULT: -10, DEMON: 3 } },
    { id: 9815, event: '你以猫步绕晕了一位结丹剑修，他输得心服口服，还请你吃鱼。', grade: 2, realm: 3, immortalEffect: { CULT: 28, DAO: 1, SE: 10 } },

    // ============ 化形（realm 4） ============
    { id: 9816, event: '你化形后仍保留猫耳猫尾，一位化形女修觉得可爱，主动与你论道三日。', grade: 2, realm: 4, immortalEffect: { CULT: 50, DAO: 2 } },
    { id: 9817, event: '你以猫族天赋潜入一座古仙府，从猫洞进去，毫发无伤地取出了传承。', grade: 3, realm: 4, immortalEffect: { CULT: 65, SE: 25, DAO: 1 } },
    { id: 9818, event: '你被人修骂作「妖物」，连你救过的村子都开始怕你。', grade: 2, realm: 4, immortalEffect: { CULT: -25, DEMON: 4 } },
    { id: 9819, event: '你被一伙人修用捆妖索暗算，虽挣脱，却伤了道基。', grade: 3, realm: 4, effect: { STR: -2 }, immortalEffect: { CULT: -30, DEMON: 2 } },
    { id: 9820, event: '你收养了一窝失去母亲的小猫妖，教它们吐纳，猫族又多了几缕香火。', grade: 2, realm: 4, immortalEffect: { CULT: 45, DAO: 3 } },

    // ============ 通神（realm 5） ============
    { id: 9821, event: '你以猫身通神，八荒猫族皆来朝拜，你成了事实上的「猫祖」。', grade: 3, realm: 5, immortalEffect: { CULT: 80, SE: 35, DAO: 2 } },
    { id: 9822, event: '你替凡人镇守一城，城里的猫都成了你的耳目，人修称你为「猫城隍」。', grade: 3, realm: 5, immortalEffect: { CULT: 85, DAO: 2 } },
    { id: 9823, event: '三位通神人修说你「妖气冲天」，联手把你逼出人族地界。', grade: 3, realm: 5, immortalEffect: { CULT: -50, DEMON: 3, EXPO: 10 } },
    { id: 9824, event: '你为救被围猎的猫族后辈，硬接了一记大神通，伤了道基。', grade: 3, realm: 5, effect: { STR: -3 }, immortalEffect: { CULT: -45, DAO: 1 } },
    { id: 9825, event: '你发现自己的九条命里，还藏着第一世猫妖老祖的残魂，他教你一式「九命玄爪」。', grade: 3, realm: 5, immortalEffect: { CULT: 100, DAO: 4 } },

    // ============ 渡劫（realm 6） ============
    { id: 9826, event: '渡劫前夜，三界猫族把自己的愿力借给了你，你感觉爪尖都在发光。', grade: 3, realm: 6, immortalEffect: { CULT: 120, DAO: 3 } },
    { id: 9827, event: '一只曾与你抢猫条的老猫，如今也修成了妖，它来替你护法。', grade: 2, realm: 6, immortalEffect: { CULT: 100, DAO: 2 } },
    { id: 9828, event: '有人修放话：「若让你一只猫先飞升，人修颜面何存？」你的飞升路上多了三分劫难。', grade: 3, realm: 6, immortalEffect: { CULT: -60, DEMON: 4, EXPO: 8 } },
    { id: 9829, event: '你在飞升前被心魔化作的猫影抓伤，旧日被踢打、被追捕的记忆翻涌而来。', grade: 3, realm: 6, immortalEffect: { CULT: -40, DEMON: 6 } },
    { id: 9830, event: '你蹲在天门之外，回首看见凡间万家灯火，忽然明白：猫也罢，人也罢，都在求一条回家的路。', grade: 3, realm: 6, immortalEffect: { CULT: 80, DAO: 5 } },
]
