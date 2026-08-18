import type { Event } from '../event.types'

/** 追加修仙事件（第四批） */
export const eventList: Event[] = [
    // 炼气
    { id: 7901, event: '你第一次打坐入定，醒来时天都黑了，你怀疑自己睡了三天。', grade: 0, realm: 1, immortalEffect: { CULT: 9 } },
    { id: 7902, event: '你在菜地里偷吃了一根灵萝卜，被农夫追着骂了半条街。', grade: 0, realm: 1, immortalEffect: { CULT: 8 } },
    { id: 7903, event: '你在河边照见自己，发现额头上多了一抹若有若无的灵光。', grade: 0, realm: 1, immortalEffect: { SE: 6 } },
    { id: 7904, event: '你学会了用灵气隔空拨动一颗毛球，乐此不疲。', grade: 0, realm: 1, immortalEffect: { CULT: 8 } },
    { id: 7905, event: '你在破庙里遇见一只炼气期的老鼠精，它哭着拜你为师。', grade: 1, realm: 1, immortalEffect: { CULT: 10, SE: 5 } },
    { id: 7906, event: '你在月圆之夜，感觉体内的灵气格外活跃，修炼事半功倍。', grade: 1, realm: 1, immortalEffect: { CULT: 12 } },
    { id: 7907, event: '你捡到一枚残缺的聚灵阵盘，虽然破，却真的能聚灵气。', grade: 1, realm: 1, immortalEffect: { SE: 10 } },
    { id: 7908, event: '你在古树下听一位说书人讲仙侠故事，听得入了迷。', grade: 0, realm: 1, immortalEffect: { CULT: 7 } },
    { id: 7909, event: '你与一只炼气期的鸟妖争抢一颗灵果，大打出手，最终平分。', grade: 1, realm: 1, immortalEffect: { CULT: 11 } },
    { id: 7910, event: '你在夜里吞吐灵气，惊动了屋主，他把你当成了「仙猫」。', grade: 1, realm: 1, immortalEffect: { CULT: 10, SE: 5 } },

    // 筑基
    { id: 8001, event: '你在筑基后第一次御风而行，吓得紧紧闭着眼。', grade: 0, realm: 2, immortalEffect: { CULT: 17 } },
    { id: 8002, event: '你在灵脉交汇处打坐，灵气如泉涌般汇入体内。', grade: 1, realm: 2, immortalEffect: { CULT: 22, SE: 12 } },
    { id: 8003, event: '你救下了一只被困在阵法里的小狐妖，它赠你一枚妖丹。', grade: 1, realm: 2, immortalEffect: { CULT: 20, SE: 10 } },
    { id: 8004, event: '你参悟了一门「猫眼金睛」，可看破低级幻术。', grade: 1, realm: 2, immortalEffect: { CULT: 21 } },
    { id: 8005, event: '你在深山里采药，被一条筑基期的蛇妖拦路，你绕道而行。', grade: 0, realm: 2, immortalEffect: { CULT: 16 } },
    { id: 8006, event: '你在夜里吸收星辰之力，道基上浮现出点点星纹。', grade: 1, realm: 2, immortalEffect: { CULT: 23, SE: 12 } },
    { id: 8007, event: '你与一位筑基散修斗法，赢了一枚储物袋。', grade: 1, realm: 2, immortalEffect: { CULT: 20, SE: 10 } },
    { id: 8008, event: '你在古战场遗址中寻到一枚残破的剑丸，炼化后锐气逼人。', grade: 2, realm: 2, effect: { STR: 1 }, immortalEffect: { CULT: 26 } },
    { id: 8009, event: '你在灵泉边泡了个澡，洗去了一身凡尘，道基愈发纯净。', grade: 1, realm: 2, immortalEffect: { CULT: 24, SE: 12 } },
    { id: 8010, event: '你在筑基中期闭关三月，出关时神清气爽。', grade: 0, realm: 2, immortalEffect: { CULT: 19, SE: 10 } },

    // 金丹
    { id: 8101, event: '你的金丹日益圆融，隐隐有突破元婴的迹象。', grade: 1, realm: 3, immortalEffect: { CULT: 33, SE: 15 } },
    { id: 8102, event: '你在丹会上露了一手，被一位丹道宗师夸赞「有灵性」。', grade: 2, realm: 3, immortalEffect: { CULT: 38, SE: 18 } },
    { id: 8103, event: '你以金丹修为，镇压了一头祸害乡里的虎妖，乡民感恩戴德。', grade: 2, realm: 3, effect: { STR: 2 }, immortalEffect: { CULT: 40 } },
    { id: 8104, event: '你在秘境中与一位金丹女修并肩作战，暗生情愫。', grade: 1, realm: 3, immortalEffect: { CULT: 34, SE: 16 } },
    { id: 8105, event: '你炼化了一枚千年温玉，心境平和，修炼一日千里。', grade: 2, realm: 3, immortalEffect: { CULT: 42, SE: 20 } },
    { id: 8106, event: '你闭关一甲子，出关时金丹已然圆满，只待化婴。', grade: 1, realm: 3, effect: { AGE: 60 }, immortalEffect: { CULT: 75 } },
    { id: 8107, event: '你收了只金丹期的鼠妖当情报头子，江湖消息尽在掌握。', grade: 1, realm: 3, immortalEffect: { CULT: 35, SE: 15 } },
    { id: 8108, event: '你在雷雨夜引雷炼体，金丹愈发光亮，肉身更强。', grade: 1, realm: 3, effect: { STR: 1 }, immortalEffect: { CULT: 38, SE: 18 } },
    { id: 8109, event: '你在万兽谷讲道，群兽听得如痴如醉，你颇有大宗师气度。', grade: 1, realm: 3, immortalEffect: { CULT: 36, SE: 16 } },
    { id: 8110, event: '你寻得一枚化婴丹，为突破元婴添了一分把握。', grade: 2, realm: 3, immortalEffect: { CULT: 45, SE: 20 } },

    // 元婴
    { id: 8201, event: '你的元婴已是半大的小猫，能与你一同参悟功法。', grade: 1, realm: 4, immortalEffect: { CULT: 48, SE: 22 } },
    { id: 8202, event: '你元婴出窍，遨游星空，见宇宙之浩渺，心生敬畏。', grade: 2, realm: 4, immortalEffect: { CULT: 55, SE: 25 } },
    { id: 8203, event: '你在星空古路闭关三百年，一朝顿悟，修为大进。', grade: 2, realm: 4, effect: { AGE: 300 }, immortalEffect: { CULT: 140 } },
    { id: 8204, event: '你以元婴修为，镇压了一头千年蛟龙，名震一方。', grade: 3, realm: 4, effect: { STR: 2 }, immortalEffect: { CULT: 75, SE: 30 } },
    { id: 8205, event: '你开宗立派，收了三百猫弟子，成了「猫祖」。', grade: 2, realm: 4, immortalEffect: { CULT: 55, SE: 25 } },
    { id: 8206, event: '你在仙府遗迹中寻得一卷化神诀，如获至宝。', grade: 3, realm: 4, immortalEffect: { CULT: 80, SE: 35 } },
    { id: 8207, event: '你与一位化神老怪论道，被骂醒，却受益终身。', grade: 2, realm: 4, immortalEffect: { CULT: 60, SE: 25 } },
    { id: 8208, event: '你在雷池中炼婴，元婴愈发剔透，宛若琉璃。', grade: 2, realm: 4, effect: { STR: 2 }, immortalEffect: { CULT: 65, SE: 30 } },
    { id: 8209, event: '你在仙酿会上饮下一滴仙露，修为暴涨。', grade: 2, realm: 4, immortalEffect: { CULT: 70, SE: 28 } },
    { id: 8210, event: '你回望凡间，那只曾与你抢猫条的猫，已在轮回中与你遥遥相望。', grade: 1, realm: 4, immortalEffect: { CULT: 50 } },

    // 化神
    { id: 8301, event: '你化神之后，一道神识便可遍观三千里山河。', grade: 2, realm: 5, immortalEffect: { CULT: 70, SE: 32 } },
    { id: 8302, event: '你在混沌海闭关五百年，肉身神识皆臻化境。', grade: 2, realm: 5, effect: { AGE: 500 }, immortalEffect: { CULT: 180 } },
    { id: 8303, event: '你与一位散仙对弈，从棋局中悟出了一缕大道。', grade: 3, realm: 5, immortalEffect: { CULT: 95, SE: 40 } },
    { id: 8304, event: '你炼化了一滴混沌真水，肉身直追仙体。', grade: 3, realm: 5, effect: { STR: 3 }, immortalEffect: { CULT: 100, SE: 45 } },
    { id: 8305, event: '你以猫身入道，引动天地异象，三界侧目。', grade: 2, realm: 5, immortalEffect: { CULT: 80, SE: 35 } },
    { id: 8306, event: '你在九天罡风中淬炼神识，心神愈发通透。', grade: 2, realm: 5, immortalEffect: { CULT: 85, SE: 38 } },
    { id: 8307, event: '你与一条化神期的真龙结拜，它唤你「猫兄」。', grade: 2, realm: 5, effect: { STR: 2 }, immortalEffect: { CULT: 90, SE: 40 } },
    { id: 8308, event: '你回望凡间，那间你出生的老屋，已在岁月中化作了尘土。', grade: 1, realm: 5, immortalEffect: { CULT: 75 } },
    { id: 8309, event: '你炼化了一枚上古妖帝的妖核，妖力大涨。', grade: 3, realm: 5, immortalEffect: { CULT: 105, SE: 45 } },
    { id: 8310, event: '你在化神巅峰盘坐，只待那最后一劫的降临。', grade: 1, realm: 5, effect: { AGE: 100 }, immortalEffect: { CULT: 92, SE: 40 } },

    // 渡劫
    { id: 8401, event: '你踏入渡劫境，天地仿佛都在你的呼吸间颤抖。', grade: 2, realm: 6, immortalEffect: { CULT: 95, SE: 45 } },
    { id: 8402, event: '你在雷海中沐浴千年，肉身不坏，神识不朽。', grade: 2, realm: 6, effect: { AGE: 1000, STR: 2 }, immortalEffect: { CULT: 220, SE: 80 } },
    { id: 8403, event: '你参悟了飞升的最后一关，只差一个契机。', grade: 3, realm: 6, immortalEffect: { CULT: 130, SE: 55 } },
    { id: 8404, event: '你寻得一枚仙人遗蜕，从中悟出飞升之秘。', grade: 3, realm: 6, immortalEffect: { CULT: 150, SE: 65 } },
    { id: 8405, event: '你以九命玄猫之身，硬扛九九八十一道天雷，巍然不动。', grade: 3, realm: 6, effect: { STR: 3 }, immortalEffect: { CULT: 140, SE: 60 } },
    { id: 8406, event: '你在飞升台前，把这一生的感悟化作了一缕仙气。', grade: 2, realm: 6, immortalEffect: { CULT: 115, SE: 50 } },
    { id: 8407, event: '你回望凡间，那些爱你的人，早已轮回，而你还在等一个飞升。', grade: 2, realm: 6, immortalEffect: { CULT: 100, SE: 45 } },
    { id: 8408, event: '你炼化了最后一道雷劫本源，天雷再难伤你分毫。', grade: 3, realm: 6, effect: { STR: 2 }, immortalEffect: { CULT: 135, SE: 60 } },
    { id: 8409, event: '你在星空尽头，看见了那道传说中的天门。', grade: 3, realm: 6, immortalEffect: { CULT: 145, SE: 65 } },
    { id: 8410, event: '你只差最后一缕仙气，便可推开天门，飞升而去。', grade: 2, realm: 6, immortalEffect: { CULT: 125, SE: 55 } },
]
