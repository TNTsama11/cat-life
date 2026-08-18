import type { Talent } from '../talent.types'

/** 追加天赋（凡猫 / 灵根 / 修仙） */
export const talentList: Talent[] = [
    // 更多凡猫天赋
    { id: 1051, name: '粘人精', description: '主人走到哪跟到哪，一刻都离不开。快乐+1，灵性+1。', grade: 0, category: 'mortal', effect: { SPR: 1, INT: 1 }, max: 1 },
    { id: 1052, name: '独行侠', description: '独来独往，酷到没朋友。灵性+1。', grade: 0, category: 'mortal', effect: { INT: 1 }, max: 1 },
    { id: 1053, name: '挑食大王', description: '非猫条不吃，非鲜鱼不碰。出身+1，体质-1。', grade: 0, category: 'mortal', effect: { MNY: 1, STR: -1 }, max: 1 },
    { id: 1054, name: '温柔小棉袄', description: '主人心情不好时，你就安静地陪着。快乐+1，颜值+1。', grade: 1, category: 'mortal', effect: { SPR: 1, CHR: 1 }, max: 1 },
    { id: 1055, name: '傲娇大小姐', description: '嘴上说着不要，身体却很诚实。颜值+2。', grade: 1, category: 'mortal', effect: { CHR: 2 }, max: 1 },
    { id: 1056, name: '胆小如鼠', description: '一点风吹草动就炸毛。灵性+1，快乐-1。', grade: 0, category: 'mortal', effect: { INT: 1, SPR: -1 }, max: 1 },
    { id: 1057, name: '胆大包天', description: '天不怕地不怕，连狗都敢惹。体质+1。', grade: 0, category: 'mortal', effect: { STR: 1 }, max: 1 },
    { id: 1058, name: '爱干净', description: '一天舔毛八百遍，油光水滑。颜值+1。', grade: 0, category: 'mortal', effect: { CHR: 1 }, max: 1 },
    { id: 1059, name: '邋遢大王', description: '毛乱得像被雷劈过，但快乐不减。快乐+2。', grade: 0, category: 'mortal', effect: { SPR: 2 }, max: 1 },
    { id: 1060, name: '好记性', description: '谁对你好，你记一辈子。灵性+2。', grade: 1, category: 'mortal', effect: { INT: 2 }, max: 1 },
    { id: 1061, name: '大胃王', description: '饭量惊人，猫粮消耗大户。体质+2。', grade: 0, category: 'mortal', effect: { STR: 2 }, max: 1 },
    { id: 1062, name: '夜行侠', description: '白天睡，晚上跑酷。快乐+1，灵性+1。', grade: 0, category: 'mortal', effect: { SPR: 1, INT: 1 }, max: 1 },
    { id: 1063, name: '暖床神器', description: '冬天往主人被窝一钻，暖意融融。快乐+1。', grade: 0, category: 'mortal', effect: { SPR: 1 }, max: 1 },
    { id: 1064, name: '猫中戏精', description: '装死、装可怜、装无辜，演技一流。颜值+1，快乐+1。', grade: 1, category: 'mortal', effect: { CHR: 1, SPR: 1 }, max: 1 },
    { id: 1065, name: '捕猎天才', description: '飞禽走兽，虫蚁鱼虾，皆在你的食谱上。灵性+2，体质+1。', grade: 1, category: 'mortal', effect: { INT: 2, STR: 1 }, max: 1 },

    // 更多灵根类
    { id: 1213, name: '道门灵猫', description: '在道观里长大的猫，耳濡目染，天生亲近道法。', grade: 2, category: 'spiritRoot', max: 1 },
    { id: 1214, name: '妖骨初成', description: '骨子里已有一丝妖气，只差一场造化。', grade: 2, category: 'spiritRoot', max: 1 },
    { id: 1215, name: '仙丹转世', description: '前世吞过仙丹，药力流转于血脉之中。', grade: 3, category: 'spiritRoot', max: 1 },

    // 更多修仙天赋
    { id: 1351, name: '法修', description: '精通五行法术，呼风唤雨。悟性+2。', grade: 2, category: 'immortal', immortalEffect: { COMP: 2 }, max: 1 },
    { id: 1352, name: '体修', description: '肉身成圣，一力降十会。体魄+3。', grade: 2, category: 'immortal', immortalEffect: { PHY: 3 }, max: 1 },
    { id: 1353, name: '丹修', description: '丹道天才，炼出的丹药供不应求。机缘+2。', grade: 1, category: 'immortal', immortalEffect: { FOR: 2 }, max: 1 },
    { id: 1354, name: '阵修', description: '阵法大家，布下大阵，固若金汤。悟性+2。', grade: 1, category: 'immortal', immortalEffect: { COMP: 2 }, max: 1 },
    { id: 1355, name: '符修', description: '一笔一划，皆可通神。机缘+2。', grade: 1, category: 'immortal', immortalEffect: { FOR: 2 }, max: 1 },
    { id: 1356, name: '炼器师', description: '打造法宝，妙手生花。机缘+2。', grade: 1, category: 'immortal', immortalEffect: { FOR: 2 }, max: 1 },
    { id: 1357, name: '妖修', description: '以妖身入道，天生肉身强横。体魄+2，根骨+1。', grade: 2, category: 'immortal', immortalEffect: { PHY: 2, APT: 1 }, max: 1 },
    { id: 1358, name: '鬼修', description: '在阴阳之间行走，通晓幽冥。灵韵+2。', grade: 1, category: 'immortal', immortalEffect: { SPC: 2 }, max: 1 },
    { id: 1359, name: '儒修', description: '腹有诗书气自华，悟性极高。悟性+3。', grade: 2, category: 'immortal', immortalEffect: { COMP: 3 }, max: 1 },
    { id: 1360, name: '苦修者', description: '十年磨一剑，根基无比扎实。根骨+2。', grade: 1, category: 'immortal', immortalEffect: { APT: 2 }, max: 1 },
    { id: 1361, name: '天材地宝猎人', description: '哪里有宝贝，哪里就有你的身影。机缘+3。', grade: 2, category: 'immortal', immortalEffect: { FOR: 3 }, max: 1 },
    { id: 1362, name: '九尾灵猫', description: '血脉返祖，尾生九条，妖力惊人。根骨+2，灵韵+2。', grade: 3, category: 'immortal', immortalEffect: { APT: 2, SPC: 2 }, max: 1 },
    { id: 1363, name: '吞日灵猫', description: '传说能吞日月的上古异种。根骨+3。', grade: 3, category: 'immortal', immortalEffect: { APT: 3 }, max: 1 },
    { id: 1364, name: '雷火双修', description: '雷火同源，威力倍增。根骨+1，体魄+1。', grade: 1, category: 'immortal', immortalEffect: { APT: 1, PHY: 1 }, max: 1 },
    { id: 1365, name: '剑胆琴心', description: '剑意凌厉，心境澄明。悟性+2，灵韵+1。', grade: 2, category: 'immortal', immortalEffect: { COMP: 2, SPC: 1 }, max: 1 },
]
