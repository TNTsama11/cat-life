import type { Achievement } from '../achievement.types'
import { AchievementOpportunity as O } from '../achievement.types'

export const achievementList: Achievement[] = [
    // ============ 凡猫成就 ============
    { id: 1001, name: '喵生初啼', description: '你来到这个世界，发出了第一声喵。', grade: 0, condition: 'AGE>=-1', hide: false, opportunity: O.Start },
    { id: 1002, name: '纸箱信徒', description: '你钻过了至少一个纸箱。', grade: 0, condition: 'EVT=2006', hide: false, opportunity: O.Trajectory },
    { id: 1003, name: '捕鼠英雄', description: '你抓到过老鼠。', grade: 0, condition: 'EVT=2015', hide: false, opportunity: O.Trajectory },
    { id: 1004, name: '寿终正寝的猫', description: '你安然活到了晚年。', grade: 1, condition: 'AGE>=16', hide: false, opportunity: O.Summary },
    { id: 1005, name: '猫界长寿翁', description: '你活过了 20 岁。', grade: 2, condition: 'AGE>=20', hide: false, opportunity: O.Summary },
    { id: 1006, name: '拆迁办主任', description: '你拆过沙发，抓过窗帘。', grade: 0, condition: 'EVT=2030', hide: false, opportunity: O.Trajectory },
    { id: 1007, name: '猫咖头牌', description: '你在猫咖打过工。', grade: 1, condition: 'EVT=2041', hide: false, opportunity: O.Trajectory },
    { id: 1008, name: '流浪的猫', description: '你在街头流浪过。', grade: 0, condition: 'EVT=2043', hide: false, opportunity: O.Trajectory },
    { id: 1009, name: '被爱的猫', description: '你被主人温柔以待。', grade: 1, condition: 'EVT=2059', hide: false, opportunity: O.Trajectory },
    { id: 1010, name: '看破红尘', description: '你经历了绝育。', grade: 0, condition: 'EVT=2024', hide: false, opportunity: O.Trajectory },
    { id: 1011, name: '家门常客', description: '你偷偷溜出过家门。', grade: 0, condition: 'EVT=2026', hide: false, opportunity: O.Trajectory },
    { id: 1012, name: '十世猫奴', description: '重开次数达到 10 次。', grade: 1, condition: 'TMS>=10', hide: false, opportunity: O.End },
    { id: 1013, name: '猫生百态', description: '累计触发过 40 个不同事件。', grade: 2, condition: 'AEVTN>=40', hide: false, opportunity: O.End },
    { id: 1014, name: '天赋异禀的猫', description: '你在一局里凑齐了 3 个以上天赋。', grade: 1, condition: 'TLTN>=3', hide: false, opportunity: O.Trajectory },

    // ============ 修仙成就 ============
    { id: 1101, name: '仙缘已至', description: '你触发了伐骨洗髓，踏入修仙。', grade: 2, condition: 'PHASE=1', hide: false, opportunity: O.Trajectory },
    { id: 1102, name: '开灵小成', description: '你踏入了开灵期。', grade: 0, condition: 'REALM>=1', hide: false, opportunity: O.Trajectory },
    { id: 1103, name: '凝脉有成', description: '你筑成了道基。', grade: 1, condition: 'REALM>=2', hide: false, opportunity: O.Trajectory },
    { id: 1104, name: '结丹大道', description: '你结成了妖丹。', grade: 2, condition: 'REALM>=3', hide: false, opportunity: O.Trajectory },
    { id: 1105, name: '化形出窍', description: '你破丹化形。', grade: 2, condition: 'REALM>=4', hide: false, opportunity: O.Trajectory },
    { id: 1106, name: '通神之境', description: '你通神成功，神识如海。', grade: 3, condition: 'REALM>=5', hide: false, opportunity: O.Trajectory },
    { id: 1107, name: '渡劫真君', description: '你踏入了渡劫境。', grade: 3, condition: 'REALM>=6', hide: false, opportunity: O.Trajectory },
    { id: 1108, name: '飞升猫仙', description: '你飞升成仙，位列仙班。', grade: 3, condition: 'REALM>=7', hide: false, opportunity: O.Summary },
    { id: 1109, name: '渡劫老手', description: '你渡过至少一次天劫。', grade: 2, condition: 'TRIB>=1', hide: false, opportunity: O.Trajectory },
    { id: 1110, name: '九重雷劫', description: '你渡过了 3 次以上天劫。', grade: 3, condition: 'TRIB>=3', hide: false, opportunity: O.Trajectory },
    { id: 1111, name: '千年老猫', description: '你活过了 1000 岁。', grade: 3, condition: 'AGE>=1000', hide: false, opportunity: O.Summary },
    { id: 1112, name: '御鼠真人', description: '你号令过鼠辈。', grade: 1, condition: 'TLT=1310', hide: false, opportunity: O.Trajectory },
    { id: 1113, name: '丹香满袖', description: '你炼出过丹药。', grade: 1, condition: 'EVT=3208', hide: false, opportunity: O.Trajectory },
    { id: 1114, name: '剑仙猫', description: '你得到过一柄仙剑。', grade: 2, condition: 'EVT=3305', hide: false, opportunity: O.Trajectory },
    { id: 1115, name: '道心坚定', description: '你突破失败却未放弃。', grade: 1, condition: 'EVT=9202', hide: false, opportunity: O.Trajectory },

    // ============ 隐藏成就 ============
    { id: 1201, name: '被绝育前飞升', description: '在凡尘绝育之前，你就已经飞升。', grade: 3, condition: 'REALM>=7&EVT!=2024', hide: true, opportunity: O.Summary },
    { id: 1202, name: '九命玄猫真的死九次', description: '传说竟是真的。', grade: 3, condition: 'TMS>=9', hide: true, opportunity: O.End },
    { id: 1203, name: '猫妖老祖', description: '你选择留在凡间，做了一方老祖。', grade: 3, condition: 'REALM=6', hide: true, opportunity: O.Summary },
    { id: 1204, name: '一夜看尽长安花', description: '你在修仙路上，从未忘记凡间。', grade: 2, condition: 'EVT=3505', hide: true, opportunity: O.Trajectory },
    { id: 1205, name: '开局一只猫', description: '你的猫生，从一次普通的重开开始。', grade: 0, condition: 'TMS>=1', hide: true, opportunity: O.End },
    { id: 1206, name: '灵根天赐', description: '你抽到了灵根类天赋。', grade: 2, condition: 'TLT=1201|TLT=1202|TLT=1203|TLT=1204|TLT=1205|TLT=1206|TLT=1207|TLT=1208|TLT=1209|TLT=1210|TLT=1211|TLT=1212', hide: false, opportunity: O.Trajectory },
]
