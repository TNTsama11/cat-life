import type { Event } from '../event.types'

/**
 * 第六批凡猫事件：网络热梗向。
 * 哈基米、圆头耄耋（圆头猫爹）、哈气、表情包、投喂文化等。
 * 注意：只玩梗不玩恶俗，不涉及虐猫/恶意梗，保持沙雕温馨。
 */
export const eventList: Event[] = [
    // ============ 正面 / 整活 ============
    { id: 2601, event: '你在街头晒太阳，有人指着你喊「哈基米！」你喵了一声，他高兴得手舞足蹈。', grade: 0, effect: { SPR: 1 } },
    { id: 2602, event: '你被人类拍成表情包，配文「哈基米：让我看看谁还没给我小鱼干」。', grade: 1, effect: { CHR: 1, SPR: 1 } },
    { id: 2603, event: '你学会了经典「哈气」，把一只想抢猫粮的大狗吓得连退三步。', grade: 1, effect: { STR: 1, SPR: 1 } },
    { id: 2604, event: '你顶着圆圆的脑袋蹲在墙头，被路过的网友称为「圆头耄耋」，还因此白嫖到一顿罐罐。', grade: 1, effect: { STR: 1, SPR: 1 } },
    { id: 2605, event: '你发现只要把耳朵压平、脑袋变圆，人类就会一边喊「圆头！」一边给你投喂零食。', grade: 0, effect: { MNY: 1, SPR: 1 } },
    { id: 2606, event: '你在猫圈里靠「哈气」出了名，连隔壁的猫都尊称你一声「哈哥」。', grade: 0, include: 'HOME=0', effect: { STR: 1, SPR: 1 } },
    { id: 2607, event: '你被博主拍进视频，标题是「哈基米大战逗猫棒」，播放量破了百万，猫条管够。', grade: 2, effect: { CHR: 2, MNY: 1 } },
    { id: 2608, event: '你学会用圆头蹭人的手，人类当场心软，把整根猫条都让给你。', grade: 0, include: 'HOME=1', effect: { SPR: 2, MNY: 1 } },

    // ============ 负面 / 玩梗翻车 ============
    { id: 2611, event: '你因为总爱哈气，被叫成「圆头耄耋」，连投喂你的好心人都开始绕着走。', grade: 1, effect: { SPR: -1, MNY: -1 } },
    { id: 2612, event: '你哈气太凶，把来送鱼的老奶奶吓跑了，到嘴的晚饭飞了。', grade: 0, include: 'HOME=0', effect: { STR: -1, SPR: -1 } },
    { id: 2613, event: '你被做成「哈基米」表情包后走红，走在路上总被人追着拍照，烦得你想钻墙缝。', grade: 1, effect: { SPR: -1, INT: 1 } },
    { id: 2614, event: '有人拿「圆头耄耋」开你玩笑，你虽然听不懂，但总觉得他们在笑你，气得把尾巴甩成了电风扇。', grade: 0, effect: { SPR: -1, INT: 1 } },
    { id: 2615, event: '你因为哈气出了名，引来了隔壁三只不服气的猫轮流挑战，你被车轮战累趴了。', grade: 1, include: 'HOME=0', effect: { STR: -1, SPR: -1 } },
    { id: 2616, event: '你被陌生人当成某只网红猫强行抱起来合影，你吓得炸毛，回家后做了三天噩梦。', grade: 1, effect: { SPR: -2 } },
]
