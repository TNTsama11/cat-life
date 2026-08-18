import type { Event } from '../event.types'

/** 追加凡猫事件（需在 ages.ts 中登记到对应年龄池） */
export const eventList: Event[] = [
    // 幼猫（0~2 岁）
    { id: 2101, event: '你睁开了眼睛，看见的第一样东西，是一双温柔的手。', grade: 0, effect: { SPR: 1 } },
    { id: 2102, event: '你被裹在小毯子里，像一只毛茸茸的饺子。', grade: 0, effect: { SPR: 1 } },
    { id: 2103, event: '你第一次吃到了羊奶粉，吧唧吧唧，满脸都是。', grade: 0, effect: { STR: 1 } },
    { id: 2104, event: '你追着自己的尾巴转圈，转晕了，一屁股坐在地上。', grade: 0, effect: { SPR: 1 } },
    { id: 2105, event: '你学会了「喵喵叫」，主人立刻冲过来把你抱了起来。', grade: 0, effect: { CHR: 1, SPR: 1 } },
    { id: 2106, event: '你第一次踩奶，把主人的肚皮当成了猫妈妈的怀抱。', grade: 0, effect: { SPR: 1 } },

    // 成年（7~16 岁）
    { id: 2110, event: '你学会了自己开猫粮柜，主人对此毫无办法。', grade: 1, effect: { INT: 2 } },
    { id: 2111, event: '你在院子里追蝴蝶，追丢了，气呼呼地甩尾巴。', grade: 0, effect: { SPR: 1 } },
    { id: 2112, event: '你叼回来一只蟑螂，主人尖叫着跳上了椅子。', grade: 0, effect: { SPR: 1 } },
    { id: 2113, event: '你在阳台上养了一盆猫草，天天给它浇水（用爪子）。', grade: 0, effect: { SPR: 1 } },
    { id: 2114, event: '你学会了「握手」，主人开心得给你加餐。', grade: 0, effect: { INT: 1, SPR: 1 } },
    { id: 2115, event: '你半夜跑酷，把主人的电脑键盘踩出了乱码。', grade: 0, effect: { SPR: 1 } },
    { id: 2116, event: '你和隔壁的猫隔窗对望，眼神交流了一下午。', grade: 0, effect: { SPR: 1 } },
    { id: 2117, event: '你在猫爬架的最高处睡了一整天，像一位登基的国王。', grade: 0, effect: { SPR: 1 } },
    { id: 2118, event: '你偷喝了主人杯子里的水，还装作什么都没发生。', grade: 0, effect: { SPR: 1 } },
    { id: 2119, event: '你把主人的袜子叼进了猫窝，藏在了最深处。', grade: 0, effect: { SPR: 1 } },
    { id: 2120, event: '你在下雨天趴在窗边，看了一整天的雨。', grade: 0, effect: { SPR: 1 } },
    { id: 2121, event: '你第一次去宠物医院体检，被量了体重，医生说「有点胖」。', grade: 0, effect: { STR: -1 } },
    { id: 2122, event: '你学会了用头顶主人的手，讨要摸摸。', grade: 0, effect: { CHR: 1, SPR: 1 } },
    { id: 2123, event: '你在猫砂盆里埋屎的时候，把猫砂刨得到处都是。', grade: 0, effect: { SPR: 1 } },
    { id: 2124, event: '你被主人带去拍了写真，照片被打印出来挂在了墙上。', grade: 1, effect: { CHR: 2, SPR: 1 } },
    { id: 2125, event: '你和主人的孩子成了好朋友，他们偷偷喂你零食。', grade: 0, effect: { SPR: 1 } },
    { id: 2126, event: '你在夜里对着空无一人的墙角炸毛，主人被吓得不敢睡觉。', grade: 0, effect: { INT: 1 } },
    { id: 2127, event: '你成功抓到了冰箱顶上的那只蛾子，成就感爆棚。', grade: 0, effect: { SPR: 1, INT: 1 } },
    { id: 2128, event: '你被楼下的狗追过，从此每次出门都要先侦察地形。', grade: 0, effect: { INT: 1 } },
    { id: 2129, event: '你在主人腿上睡觉，被摸得舒服得直打呼噜。', grade: 0, effect: { SPR: 1 } },
    { id: 2130, event: '你发现了一个新的纸箱，开心得在里面滚来滚去。', grade: 0, effect: { SPR: 2 } },
    { id: 2131, event: '你在窗台上晒太阳，晒得肚皮都翻了出来。', grade: 0, effect: { SPR: 1 } },
    { id: 2132, event: '你第一次看见下雪，扑着雪花玩了一下午。', grade: 0, effect: { SPR: 1 } },
    { id: 2133, event: '你把主人的耳机线咬断了，主人含泪下单了新的。', grade: 0, effect: { SPR: 1 } },
    { id: 2134, event: '你在夜里巡逻，把家里的每个角落都检查了一遍。', grade: 0, effect: { STR: 1 } },
    { id: 2135, event: '你学会了自己开冰箱门（虽然主人改了密码）。', grade: 1, effect: { INT: 2 } },
    { id: 2136, event: '你被一只鹦鹉骂了「笨蛋」，你记仇记了三天。', grade: 0, effect: { SPR: -1 } },
    { id: 2137, event: '你在主人生病的时候，破天荒地没有捣乱，只是安静地陪着。', grade: 1, effect: { SPR: 2 } },
    { id: 2138, event: '你被主人带去相亲，对方也是一只猫，你们一见如故。', grade: 1, include: 'HOME=1&ROM=1', effect: { SPR: 2 } },
    { id: 2139, event: '你在夜里偷偷练习「捕猎」，把毛绒玩具当成猎物。', grade: 0, effect: { INT: 1 } },
    { id: 2140, event: '你在猫抓板上磨爪子，磨出了一道道深深的痕迹。', grade: 0, effect: { STR: 1 } },

    // 晚年（17~25 岁）
    { id: 2150, event: '你爬高的次数变少了，更多时候是安静地晒太阳。', grade: 0, effect: { CHR: -1 } },
    { id: 2151, event: '你开始喜欢靠着主人睡，仿佛又回到了小时候。', grade: 0, effect: { SPR: 1 } },
    { id: 2152, event: '主人给你买了软软的老年猫粮，你吃得很慢，很珍惜。', grade: 0, effect: { SPR: 1 } },
    { id: 2153, event: '你在梦里回到了小时候，追着一只蝴蝶跑个不停。', grade: 0, effect: { SPR: 1 } },
    { id: 2154, event: '你把主人当成了猫妈妈，轻轻地踩奶，呼噜声很轻很轻。', grade: 1, effect: { SPR: 2 } },
    { id: 2155, event: '你在窗边看夕阳，金色的光落满全身。', grade: 0, effect: { SPR: 1 } },
    { id: 2156, event: '你在一个安静的午后，躺在最爱的纸箱里睡着了，再也没醒来。', grade: 1, lethal: true },
    { id: 2157, event: '你在主人怀里安详地闭上了眼睛，嘴角还带着一点点微笑。', grade: 1, lethal: true },
    { id: 2158, event: '你的一生，是一只猫温柔而完整的一生。', grade: 1, effect: { SPR: 2 } },

    // 成精前兆 / 机缘巧合（暗示修仙线）
    { id: 2160, event: '你在月圆之夜，总感觉体内有股气在涌动。', grade: 1, effect: { INT: 1 } },
    { id: 2161, event: '你看见一只会发光的蝴蝶，它停在你鼻尖上，转瞬又消失了。', grade: 1, effect: { INT: 1 } },
    { id: 2162, event: '一位老道路过你家门口，盯着你看了半晌，说了句「好灵性的猫」。', grade: 1, effect: { INT: 1 } },
    { id: 2163, event: '你捡到一颗温润的珠子，戴在脖子上，总觉得精神了许多。', grade: 1, effect: { STR: 1, INT: 1 } },
    { id: 2164, event: '你在梦里见到一只通体雪白的猫，它说：「你的仙缘，快到了。」', grade: 2, effect: { INT: 2 } },
    { id: 2165, event: '你误食了一株发光的草，肚子里暖烘烘的，说不出的舒服。', grade: 1, effect: { STR: 1 } },
]
