import type { Achievement } from '../achievement.types'
import { AchievementOpportunity as O } from '../achievement.types'

export const achievementList: Achievement[] = [
    // 更多凡猫成就
    { id: 1015, name: '第一次踩奶', description: '你在主人肚皮上踩出了幸福的节奏。', grade: 0, condition: 'EVT=2106', hide: false, opportunity: O.Trajectory },
    { id: 1016, name: '猫界外交官', description: '你相亲成功，收获了一只猫朋友。', grade: 0, condition: 'EVT=2138', hide: false, opportunity: O.Trajectory },
    { id: 1017, name: '纸箱葬身', description: '你在最爱的纸箱里安然睡去。', grade: 1, condition: 'EVT=2156', hide: false, opportunity: O.Summary },
    { id: 1018, name: '颜值担当', description: '你的颜值达到 9 以上。', grade: 1, condition: 'CHR>=9', hide: false, opportunity: O.Summary },
    { id: 1019, name: '快乐猫生', description: '你的快乐达到 9 以上。', grade: 1, condition: 'SPR>=9', hide: false, opportunity: O.Summary },
    { id: 1020, name: '灵猫降世', description: '你梦见了通体雪白的猫。', grade: 1, condition: 'EVT=2164', hide: false, opportunity: O.Trajectory },
    { id: 1021, name: '博物馆猫', description: '你当上了镇馆之猫。', grade: 0, condition: 'TLT=1031', hide: false, opportunity: O.Trajectory },
    { id: 1022, name: '猫界锦鲤', description: '你的运气好到离谱。', grade: 1, condition: 'TLT=1048', hide: false, opportunity: O.Trajectory },
    { id: 1023, name: '猫生赢家', description: '你活成了猫中龙凤。', grade: 2, condition: 'SUM>=120', hide: false, opportunity: O.Summary },

    // 更多修仙成就
    { id: 1116, name: '修为小成', description: '你的修为突破了 100。', grade: 0, condition: 'CULT>=100', hide: false, opportunity: O.Trajectory },
    { id: 1117, name: '灵气充盈', description: '你的灵气达到了 50 以上。', grade: 1, condition: 'SE>=50', hide: false, opportunity: O.Trajectory },
    { id: 1118, name: '根骨天成', description: '你的根骨达到 9 以上。', grade: 2, condition: 'APT>=9', hide: false, opportunity: O.Trajectory },
    { id: 1119, name: '悟性绝伦', description: '你的悟性达到 9 以上。', grade: 2, condition: 'COMP>=9', hide: false, opportunity: O.Trajectory },
    { id: 1120, name: '机缘不浅', description: '你的机缘达到 9 以上。', grade: 2, condition: 'FOR>=9', hide: false, opportunity: O.Trajectory },
    { id: 1121, name: '猫祖之姿', description: '你开宗立派，收了猫弟子。', grade: 2, condition: 'EVT=6306', hide: false, opportunity: O.Trajectory },
    { id: 1122, name: '道侣相伴', description: '你在修仙路上遇见了道侣。', grade: 2, condition: 'EVT=6310', hide: false, opportunity: O.Trajectory },
    { id: 1123, name: '斩妖除魔', description: '你斩杀了为祸乡里的妖物。', grade: 1, condition: 'EVT=3205', hide: false, opportunity: O.Trajectory },
    { id: 1124, name: '虎妖坐骑', description: '你收服了虎妖当坐骑。', grade: 2, condition: 'EVT=6204', hide: false, opportunity: O.Trajectory },
    { id: 1125, name: '猫仙祠', description: '凡人给你立了祠堂。', grade: 1, condition: 'EVT=6112', hide: false, opportunity: O.Trajectory },
    { id: 1126, name: '闭关狂魔', description: '你闭关超过 300 年。', grade: 1, condition: 'AGE>=300', hide: false, opportunity: O.Summary },
    { id: 1127, name: '渡过天劫', description: '你成功渡过了一次天劫。', grade: 2, condition: 'TRIB>=1', hide: false, opportunity: O.Trajectory },
    { id: 1128, name: '半步飞升', description: '你踏入了渡劫境。', grade: 2, condition: 'REALM>=6', hide: false, opportunity: O.Trajectory },

    // 更多隐藏成就
    { id: 1207, name: '绝世废柴', description: '根骨不足 2，却还在修仙路上挣扎。', grade: 2, condition: 'APT<=1&PHASE=1', hide: true, opportunity: O.Trajectory },
    { id: 1208, name: '天纵奇才', description: '根骨达到 10，天选之猫。', grade: 3, condition: 'APT>=10', hide: true, opportunity: O.Trajectory },
    { id: 1209, name: '猫条成仙', description: '你靠着一股执念，把猫条吃成了仙途。', grade: 3, condition: 'REALM>=7&EVT=2022', hide: true, opportunity: O.Summary },
    { id: 1210, name: '凡尘无悔', description: '你一生都没有踏入修仙，却过得圆满。', grade: 2, condition: 'PHASE=0&AGE>=18', hide: true, opportunity: O.Summary },
    { id: 1211, name: '九世轮回', description: '你重开了 9 次猫生。', grade: 1, condition: 'TMS>=9', hide: true, opportunity: O.End },
    { id: 1212, name: '仙缘误入', description: '没有灵根，却靠机缘踏入了修仙。', grade: 3, condition: 'PHASE=1&TLT!=1201&TLT!=1202&TLT!=1203&TLT!=1204&TLT!=1205&TLT!=1206&TLT!=1207&TLT!=1208&TLT!=1209&TLT!=1210&TLT!=1211&TLT!=1212', hide: true, opportunity: O.Trajectory },
]
