export const properties = {
    charm: '颜值',
    intelligence: '灵性',
    strength: '体魄',
    money: '出身',
    spirit: '快乐',
    age: '享年',
    summary: '总评',
}

export const immortalProperties = {
    aptitude: '根骨',
    comprehension: '悟性',
    physique: '体魄',
    fortune: '机缘',
    spiritCharm: '灵韵',
}

const s = (str: string) => str.split('|')
const p = (prefix: string, arr: string[]) => arr.map(v => prefix + v)
const jbase = '地狱|折磨|不佳|普通|优秀|罕见|逆天|传说'
export const judges = {
    summary: s(jbase),
    charm: s(jbase),
    money: s(jbase),
    spirit: s('地狱|折磨|不幸|普通|幸福|极乐|天命'),
    intelligence: s(jbase + '|开智|通灵|妖智|仙慧'),
    strength: s(jbase + '|凝气|筑基|金丹|元婴|仙体'),
    age: s('早夭|少年|壮年|中年|晚年|高寿|猫瑞|南山|不老|修仙|仙寿'),
}

export const rates = {
    times: p('抽到紫色概率', s('不变|翻倍|三倍|四倍|五倍|六倍')),
    achievement: p('抽到橙色概率', s('不变|翻倍|三倍|四倍|五倍|六倍')),
}

export function judgeDisplay(key: keyof typeof judges, level: number) {
    return judges[key][level]
}
