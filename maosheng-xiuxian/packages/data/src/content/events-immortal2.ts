import type { Event } from '../event.types'

/** 追加修仙事件（第二批，按境界分池） */
export const eventList: Event[] = [
    // 炼气
    { id: 6601, event: '你第一次用灵气托起一片落叶，开心得原地转圈。', grade: 0, realm: 1, immortalEffect: { CULT: 7 } },
    { id: 6602, event: '你在月夜里吞吐灵气，被一只路过的夜枭看成了精怪。', grade: 0, realm: 1, immortalEffect: { CULT: 8, SE: 5 } },
    { id: 6603, event: '你偷学了主人家的太极拳，居然真打出了几分气感。', grade: 1, realm: 1, immortalEffect: { CULT: 10 } },
    { id: 6604, event: '你在河边捞到一块灵石，叼回家藏进了猫窝。', grade: 1, realm: 1, immortalEffect: { SE: 10 } },
    { id: 6605, event: '你被一只炼气期的兔妖抢了胡萝卜，你追了它三里地。', grade: 0, realm: 1, effect: { STR: 1 }, immortalEffect: { CULT: 9 } },
    { id: 6606, event: '你在古树下打坐，树灵送了你一缕木之灵气。', grade: 1, realm: 1, immortalEffect: { CULT: 11, SE: 6 } },
    { id: 6607, event: '你学会了内视，看见自己经脉里游走着一丝丝灵气。', grade: 0, realm: 1, immortalEffect: { CULT: 8 } },
    { id: 6608, event: '你在夜里对着流星许愿，第二天竟捡到一枚储物符。', grade: 2, realm: 1, immortalEffect: { SE: 15 } },
    { id: 6609, event: '你与一只会说话的老鼠成了朋友，它教你辨认灵草。', grade: 1, realm: 1, immortalEffect: { CULT: 10, SE: 5 } },
    { id: 6610, event: '你误入一片灵田，偷吃了几根灵萝卜，被农夫追着骂。', grade: 0, realm: 1, immortalEffect: { CULT: 12 } },

    // 筑基
    { id: 6701, event: '你在筑基后第一次御气飞行，摔了个猫啃泥。', grade: 0, realm: 2, effect: { STR: -1 }, immortalEffect: { CULT: 16 } },
    { id: 6702, event: '你在山巅吸收日精月华，筑起了更坚实的道基。', grade: 1, realm: 2, immortalEffect: { CULT: 20, SE: 10 } },
    { id: 6703, event: '你与一只筑基期的狐狸精斗智，略胜一筹。', grade: 1, realm: 2, effect: { INT: 1 }, immortalEffect: { CULT: 18 } },
    { id: 6704, event: '你在集市上卖了一瓶自酿的「猫薄荷灵液」，大赚一笔灵石。', grade: 2, realm: 2, immortalEffect: { CULT: 22, SE: 12 } },
    { id: 6705, event: '你救了只落水的黄雀，它衔来一枚灵果报恩。', grade: 1, realm: 2, immortalEffect: { CULT: 20, SE: 10 } },
    { id: 6706, event: '你在瀑布下冲刷肉身，把杂质洗去了大半。', grade: 1, realm: 2, effect: { STR: 1 }, immortalEffect: { CULT: 18 } },
    { id: 6707, event: '你参悟了一门「猫爪裂空」的小神通。', grade: 2, realm: 2, immortalEffect: { CULT: 25 } },
    { id: 6708, event: '你在古修士的洞府里闭关，出来时气息更胜从前。', grade: 1, realm: 2, immortalEffect: { CULT: 24, SE: 12 } },
    { id: 6709, event: '你与几位筑基散修结伴探宝，分得了一笔灵石。', grade: 1, realm: 2, immortalEffect: { CULT: 20, SE: 12 } },
    { id: 6710, event: '你在夜里看见一道流星，追着它跑出了几十里。', grade: 0, realm: 2, immortalEffect: { CULT: 15 } },

    // 金丹
    { id: 6801, event: '你的金丹圆融饱满，修为精进得极快。', grade: 1, realm: 3, immortalEffect: { CULT: 32, SE: 15 } },
    { id: 6802, event: '你在丹会上一鸣惊人，被一位丹道宗师收为记名弟子。', grade: 2, realm: 3, immortalEffect: { CULT: 38, SE: 18 } },
    { id: 6803, event: '你以金丹修为，硬撼了一位元婴老怪的威压，虽败犹荣。', grade: 2, realm: 3, effect: { STR: 1 }, immortalEffect: { CULT: 36 } },
    { id: 6804, event: '你在北海寻到一枚千年冰心，炼化后心境通明。', grade: 2, realm: 3, immortalEffect: { CULT: 40, SE: 20 } },
    { id: 6805, event: '你收了一只金丹期的老鼠精当军师，猫鼠联手，天下无敌。', grade: 1, realm: 3, immortalEffect: { CULT: 34, SE: 15 } },
    { id: 6806, event: '你在雷雨夜引雷炼体，金丹愈发光亮。', grade: 1, realm: 3, effect: { STR: 1 }, immortalEffect: { CULT: 35, SE: 18 } },
    { id: 6807, event: '你闭关五十年，出关时昔日的猫友已化作一抔黄土。', grade: 1, realm: 3, effect: { AGE: 50 }, immortalEffect: { CULT: 70 } },
    { id: 6808, event: '你在秘境中夺得一枚化婴果，为突破元婴埋下伏笔。', grade: 2, realm: 3, immortalEffect: { CULT: 45, SE: 20 } },
    { id: 6809, event: '你与一条金丹期的蛟龙斗法，斗了个旗鼓相当。', grade: 2, realm: 3, effect: { STR: 2 }, immortalEffect: { CULT: 40 } },
    { id: 6810, event: '你在万兽谷讲道，一讲就是三天，群兽听得如痴如醉。', grade: 1, realm: 3, immortalEffect: { CULT: 38, SE: 18 } },

    // 元婴
    { id: 6901, event: '你的元婴日渐凝实，已能离体游历。', grade: 1, realm: 4, immortalEffect: { CULT: 48, SE: 22 } },
    { id: 6902, event: '你在星空古路闭关三百年，元婴出窍，遨游星海。', grade: 2, realm: 4, effect: { AGE: 300 }, immortalEffect: { CULT: 140 } },
    { id: 6903, event: '你与一位化神老怪论道，被骂了三天，却悟透了瓶颈。', grade: 2, realm: 4, immortalEffect: { CULT: 60, SE: 25 } },
    { id: 6904, event: '你在上古洞天里得到一株化神草，服下后气息暴涨。', grade: 3, realm: 4, immortalEffect: { CULT: 80, SE: 30 } },
    { id: 6905, event: '你的猫族后辈来朝拜你，你随手点化了三只小猫。', grade: 1, realm: 4, immortalEffect: { CULT: 50, SE: 22 } },
    { id: 6906, event: '你以元婴修为，镇压了一头为祸的千年蛟龙。', grade: 3, realm: 4, effect: { STR: 2 }, immortalEffect: { CULT: 75, SE: 30 } },
    { id: 6907, event: '你在仙酿会上喝到一滴仙露，修为大进。', grade: 2, realm: 4, immortalEffect: { CULT: 70, SE: 28 } },
    { id: 6908, event: '你回望凡间，那间你出生的老屋，早已化作了尘土。', grade: 1, realm: 4, immortalEffect: { CULT: 52 } },
    { id: 6909, event: '你在雷池中炼婴，元婴愈发剔透。', grade: 2, realm: 4, effect: { STR: 2 }, immortalEffect: { CULT: 65, SE: 30 } },
    { id: 6910, event: '你寻得半部飞升诀，如获至宝。', grade: 3, realm: 4, immortalEffect: { CULT: 85, SE: 35 } },

    // 化神
    { id: 7101, event: '你化神后，一道神识可遍观三千里山河。', grade: 2, realm: 5, immortalEffect: { CULT: 70, SE: 32 } },
    { id: 7102, event: '你在混沌海闭关五百年，肉身与神识皆臻化境。', grade: 2, realm: 5, effect: { AGE: 500 }, immortalEffect: { CULT: 180 } },
    { id: 7103, event: '你与一位散仙对弈三局，从棋局中悟出了大道。', grade: 3, realm: 5, immortalEffect: { CULT: 95, SE: 40 } },
    { id: 7104, event: '你炼化了一滴混沌真水，肉身直逼仙体。', grade: 3, realm: 5, effect: { STR: 3 }, immortalEffect: { CULT: 100, SE: 45 } },
    { id: 7105, event: '你以猫身入道，引动天地异象，三界瞩目。', grade: 2, realm: 5, immortalEffect: { CULT: 80, SE: 35 } },
    { id: 7106, event: '你在九天罡风中淬炼神识，只觉心神愈发通透。', grade: 2, realm: 5, immortalEffect: { CULT: 85, SE: 38 } },
    { id: 7107, event: '你与一条化神期的真龙结拜，它唤你一声「猫兄」。', grade: 2, realm: 5, effect: { STR: 2 }, immortalEffect: { CULT: 90, SE: 40 } },
    { id: 7108, event: '你回望来路，从一只小奶猫到化神大能，恍如隔世。', grade: 1, realm: 5, immortalEffect: { CULT: 78 } },
    { id: 7109, event: '你炼化了一枚上古妖帝的妖核，妖力大涨。', grade: 3, realm: 5, immortalEffect: { CULT: 105, SE: 45 } },
    { id: 7110, event: '你在化神巅峰盘坐百年，只待那最后一劫。', grade: 1, realm: 5, effect: { AGE: 100 }, immortalEffect: { CULT: 92, SE: 40 } },

    // 渡劫
    { id: 7201, event: '你踏入渡劫境，头顶的劫云仿佛都臣服于你。', grade: 2, realm: 6, immortalEffect: { CULT: 95, SE: 45 } },
    { id: 7202, event: '你在雷海中沐浴千年，肉身不坏，神识不朽。', grade: 2, realm: 6, effect: { AGE: 1000, STR: 2 }, immortalEffect: { CULT: 220, SE: 80 } },
    { id: 7203, event: '你参悟了飞升的最后一关，只差一个契机。', grade: 3, realm: 6, immortalEffect: { CULT: 130, SE: 55 } },
    { id: 7204, event: '你寻得一枚仙人遗蜕，从中悟出了飞升之秘。', grade: 3, realm: 6, immortalEffect: { CULT: 150, SE: 65 } },
    { id: 7205, event: '你以九命玄猫之身，硬扛九九八十一道天雷，巍然不动。', grade: 3, realm: 6, effect: { STR: 3 }, immortalEffect: { CULT: 140, SE: 60 } },
    { id: 7206, event: '你在飞升台前，把这一生的感悟化作了一缕仙气。', grade: 2, realm: 6, immortalEffect: { CULT: 115, SE: 50 } },
    { id: 7207, event: '你回望凡间，那些爱你的人，早已转世轮回，而你还在等一个飞升。', grade: 2, realm: 6, immortalEffect: { CULT: 100, SE: 45 } },
    { id: 7208, event: '你炼化了最后一道雷劫本源，天雷再难伤你分毫。', grade: 3, realm: 6, effect: { STR: 2 }, immortalEffect: { CULT: 135, SE: 60 } },
    { id: 7209, event: '你在星空尽头，看见了那道传说中的天门。', grade: 3, realm: 6, immortalEffect: { CULT: 145, SE: 65 } },
    { id: 7210, event: '你只差最后一缕仙气，便可推开天门，飞升而去。', grade: 2, realm: 6, immortalEffect: { CULT: 125, SE: 55 } },
]
