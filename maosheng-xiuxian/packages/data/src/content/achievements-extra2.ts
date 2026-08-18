import type { Achievement } from '../achievement.types'
import { AchievementOpportunity as O } from '../achievement.types'

export const achievementList: Achievement[] = [
    { id: 1024, name: '猫界社牛', description: '你交到了猫朋友。', grade: 0, condition: 'EVT=2027', hide: false, opportunity: O.Trajectory },
    { id: 1025, name: '开箱狂魔', description: '你钻过纸箱，也钻过纸袋。', grade: 0, condition: 'EVT=2006|EVT=2213', hide: false, opportunity: O.Trajectory },
    { id: 1026, name: '键盘侠', description: '你踩过主人的键盘。', grade: 0, condition: 'EVT=2214|EVT=2345', hide: false, opportunity: O.Trajectory },
    { id: 1027, name: '拆家十级', description: '你拆过沙发，也抓过窗帘。', grade: 0, condition: 'EVT=2030|EVT=2223', hide: false, opportunity: O.Trajectory },
    { id: 1028, name: '猫界干饭王', description: '你是个十足的吃货。', grade: 0, condition: 'TLT=1017|TLT=1061', hide: false, opportunity: O.Trajectory },
    { id: 1029, name: '追光少年', description: '你追过蝴蝶，也追过萤火虫。', grade: 0, condition: 'EVT=2111|EVT=2315', hide: false, opportunity: O.Trajectory },
    { id: 1030, name: '被温柔以待', description: '你活过 15 岁，且从未流浪。', grade: 1, condition: 'AGE>=15&EVT!=2043', hide: false, opportunity: O.Summary },

    { id: 1131, name: '引气入体', description: '你学会了引气入体。', grade: 0, condition: 'EVT=3002', hide: false, opportunity: O.Trajectory },
    { id: 1132, name: '御剑飞行', description: '你学会了御剑。', grade: 1, condition: 'EVT=3202|EVT=7403', hide: false, opportunity: O.Trajectory },
    { id: 1133, name: '炼丹有成', description: '你炼出过丹药。', grade: 1, condition: 'EVT=3208|EVT=7502', hide: false, opportunity: O.Trajectory },
    { id: 1134, name: '收徒传道', description: '你收过徒弟。', grade: 1, condition: 'EVT=6211|EVT=7605|EVT=6306', hide: false, opportunity: O.Trajectory },
    { id: 1135, name: '斩蛟屠龙', description: '你与蛟龙交过手。', grade: 2, condition: 'EVT=6809|EVT=7509|EVT=7604', hide: false, opportunity: O.Trajectory },
    { id: 1136, name: '得道多助', description: '你结交了真龙或散仙。', grade: 2, condition: 'EVT=7107|EVT=7707', hide: false, opportunity: O.Trajectory },
    { id: 1137, name: '仙露一滴', description: '你饮下过仙露。', grade: 2, condition: 'EVT=6907|EVT=7610', hide: false, opportunity: O.Trajectory },
    { id: 1138, name: '飞升诀', description: '你寻得过飞升诀。', grade: 2, condition: 'EVT=6910|EVT=7611', hide: false, opportunity: O.Trajectory },
    { id: 1139, name: '历劫重生', description: '你渡劫失败却活了下来。', grade: 2, condition: 'EVT=9403|EVT=9404|EVT=9405|EVT=9406', hide: false, opportunity: O.Trajectory },
    { id: 1140, name: '猫族老祖', description: '你开宗立派，成为猫族老祖。', grade: 3, condition: 'EVT=6306|EVT=7605', hide: false, opportunity: O.Trajectory },
    { id: 1141, name: '人修眼中的异类', description: '你被人类修士当成妖兽、灵宠或材料，但你活下来了。', grade: 1, condition: 'EVT=9008|EVT=9018|EVT=9030|EVT=9040', hide: false, opportunity: O.Trajectory },
    { id: 1142, name: '猫有猫道', description: '你悟出了属于自己的修炼路子。', grade: 2, condition: 'EVT=9012|EVT=9019|EVT=9042', hide: false, opportunity: O.Trajectory },
    { id: 1143, name: '灵宠惊魂', description: '你从想抓你当灵宠的人修手里逃过一劫。', grade: 1, condition: 'EVT=9011|EVT=9018', hide: false, opportunity: O.Trajectory },
    { id: 1144, name: '敢把天门挠开', description: '你决定以猫身叩问天门。', grade: 3, condition: 'EVT=9058|EVT=9060', hide: false, opportunity: O.Trajectory },
]
