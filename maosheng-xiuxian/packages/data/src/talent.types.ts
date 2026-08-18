/** 天赋稀有度 */
export enum TalentGrade {
    White = 0,
    Blue = 1,
    Purple = 2,
    Orange = 3,
}

/** 天赋效果 */
export type TalentEffect = {
    /** 额外家境 */
    readonly MNY?: number
    /** 额外体质 */
    readonly STR?: number
    /** 额外智力 */
    readonly INT?: number
    /** 额外颜值 */
    readonly CHR?: number
    /** 额外快乐 */
    readonly SPR?: number
    /** 额外随机属性 */
    readonly RND?: number
}

/** 权重天赋 */
export type TalentWithWeight = [number, number]

/** 指定列表盲盒 */
export type TalentReplacementTalent = {
    talent: TalentWithWeight[]
    grade?: never
}

/** 指定稀有度盲盒 */
export type TalentReplacementGrade = {
    grade: TalentGrade
    talent?: never
}

/** 天赋盲盒 */
export type TalentReplacement = TalentReplacementTalent | TalentReplacementGrade

/** 天赋 */
export type Talent = {
    /** 序号 */
    readonly id: number
    /** 天赋名 */
    readonly name: string
    /** 天赋描述 */
    readonly description: string
    /** 天赋触发条件 */
    readonly condition?: string
    /** 天赋稀有度 */
    readonly grade: TalentGrade
    /** 天赋效果 */
    readonly effect?: TalentEffect
    /** 专属天赋 */
    readonly exclusive?: boolean
    /** 初始可用属性点调整 */
    readonly points?: number
    /** 互斥天赋 */
    readonly exclude?: number[]
    /** 天赋盲盒 */
    readonly replacement?: TalentReplacement
    /** 天赋触发上限 */
    readonly max: number
    /** 天赋类别（凡猫 / 灵根 / 修仙） */
    readonly category?: 'mortal' | 'spiritRoot' | 'immortal'
    /** 修仙天赋效果 */
    readonly immortalEffect?: {
        /** 根骨 */
        readonly APT?: number
        /** 悟性 */
        readonly COMP?: number
        /** 体魄 */
        readonly PHY?: number
        /** 机缘 */
        readonly FOR?: number
        /** 灵韵 */
        readonly SPC?: number
        /** 修为 */
        readonly CULT?: number
        /** 灵气 */
        readonly SE?: number
    }
}
