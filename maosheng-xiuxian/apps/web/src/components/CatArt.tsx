import type { Realm } from '@remake/data'
import { Realm as R } from '@remake/data'

/** 猫脸 Logo（纯 SVG，currentColor 自适应主题） */
export function CatFace({ size = 64 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path d="M16 26 L18 10 L30 20 Z" fill="currentColor" />
            <path d="M48 26 L46 10 L34 20 Z" fill="currentColor" />
            <path d="M18 24 L19 14 L27 20 Z" fill="var(--base-background-color)" opacity="0.85" />
            <path d="M46 24 L45 14 L37 20 Z" fill="var(--base-background-color)" opacity="0.85" />
            <path d="M14 40 Q12 30 20 22 Q32 14 44 22 Q52 30 50 40 Q48 52 32 55 Q16 52 14 40 Z" fill="currentColor" />
            <path d="M32 18 L32 24 M28 19 L30 24 M36 19 L34 24" stroke="var(--base-background-color)" strokeWidth="1.6" strokeLinecap="round" opacity="0.55" />
            <ellipse cx="22" cy="32" rx="4.2" ry="4.8" fill="var(--base-background-color)" />
            <ellipse cx="42" cy="32" rx="4.2" ry="4.8" fill="var(--base-background-color)" />
            <ellipse cx="23" cy="32" rx="2" ry="2.8" fill="currentColor" />
            <ellipse cx="41" cy="32" rx="2" ry="2.8" fill="currentColor" />
            <path d="M32 38 L30 42 L34 42 Z" fill="var(--base-background-color)" />
            <path d="M32 42 Q32 47 28 49 M32 42 Q32 47 36 49" stroke="var(--base-background-color)" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M10 36 Q16 36 20 39 M10 42 Q16 42 20 41 M54 36 Q48 36 44 39 M54 42 Q48 42 44 41" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
            <ellipse cx="17" cy="40" rx="2" ry="1.2" fill="var(--base-background-color)" opacity="0.35" />
            <ellipse cx="47" cy="40" rx="2" ry="1.2" fill="var(--base-background-color)" opacity="0.35" />
        </svg>
    )
}

/** 猫爪印 */
export function PawPrint({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <ellipse cx="6" cy="8" rx="2.6" ry="3.4" />
            <ellipse cx="12" cy="5" rx="2.6" ry="3.4" />
            <ellipse cx="18" cy="8" rx="2.6" ry="3.4" />
            <ellipse cx="12" cy="16" rx="5" ry="4.6" />
        </svg>
    )
}

/** 境界徽章图标（每个境界一个主题符号） */
export function RealmGlyph({ realm, size = 22 }: { realm: Realm; size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            {realm === R.Mortal && (
                <>
                    <circle cx="8" cy="9" r="1.4" fill="currentColor" stroke="none" />
                    <circle cx="16" cy="9" r="1.4" fill="currentColor" stroke="none" />
                    <path d="M6 5 L8 9 L7 10 Z M18 5 L16 9 L17 10 Z" fill="currentColor" stroke="none" />
                    <path d="M9 13 Q12 15 15 13" strokeLinecap="round" />
                </>
            )}
            {realm === R.QiRefining && (
                <path d="M7 16 Q7 10 12 8 Q17 10 17 16 Q12 14 7 16 Z" strokeLinejoin="round" />
            )}
            {realm === R.Foundation && (
                <><rect x="6" y="6" width="12" height="12" /><rect x="9.5" y="9.5" width="5" height="5" /></>
            )}
            {realm === R.GoldenCore && (
                <><circle cx="12" cy="12" r="6.5" /><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" /></>
            )}
            {realm === R.NascentSoul && (
                <><circle cx="12" cy="12" r="6.5" /><circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" /><path d="M12 12 Q14 6 18 4 M12 12 Q10 6 6 4" strokeLinecap="round" /></>
            )}
            {realm === R.SpiritSevering && (
                <path d="M12 4 L15 10 L12 20 L9 10 Z" strokeLinejoin="round" />
            )}
            {realm === R.Tribulation && (
                <path d="M13 3 L6 14 L11 14 L9 21 L18 10 L12 10 Z" fill="currentColor" strokeLinejoin="round" />
            )}
            {realm === R.Ascension && (
                <>
                    <path d="M12 19 L12 6 M8 10 L12 6 L16 10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 3 Q13 1 15 1 M12 3 Q11 1 9 1" strokeLinecap="round" />
                    <path d="M5 21 H19" strokeLinecap="round" opacity="0.6" />
                </>
            )}
        </svg>
    )
}

/** 祥云装饰 */
export function Cloud({ size = 40 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 24" fill="currentColor" aria-hidden="true">
            <path d="M10 20 Q6 20 6 15 Q6 10 12 9 Q13 4 20 4 Q26 4 28 9 Q34 8 36 13 Q38 16 35 20 Z" />
        </svg>
    )
}

/** 猫猫剪影（坐姿） */
export function CatSilhouette({ size = 56 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
            <path d="M18 12 L26 22 L22 25 Z" opacity="0.85" />
            <path d="M46 12 L38 22 L42 25 Z" opacity="0.85" />
            <path d="M14 26 Q13 14 26 17 L29 29 Q31 31 35 31 L37 16 Q50 14 51 26 Q55 33 55 40 Q55 52 44 55 L44 60 L20 60 L20 55 Q9 52 9 40 Q9 33 14 26 Z" />
            <path d="M21 57 Q10 62 9 53 Q8 46 14 44 Q16 50 21 55" opacity="0.9" />
            <circle cx="24" cy="34" r="2.5" fill="var(--base-background-color)" />
            <circle cx="40" cy="34" r="2.5" fill="var(--base-background-color)" />
            <path d="M28 42 Q32 46 36 42" stroke="var(--base-background-color)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M30 48 Q30 52 27 54 M34 48 Q34 52 37 54" stroke="var(--base-background-color)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
    )
}

/** 星光点缀 */
export function Sparkle({ size = 16 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2 L13.5 10 L21 12 L13.5 14 L12 22 L10.5 14 L3 12 L10.5 10 Z" />
        </svg>
    )
}

/** 小鱼干/鱼骨 */
export function FishBone({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            <path d="M5 12 C8 7 16 7 19 12 C16 17 8 17 5 12 Z" />
            <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
            <path d="M5 12 L3 9 M5 12 L3 15 M8 12 L6 9 M8 12 L6 15 M16 12 L18 9 M16 12 L18 15 M19 12 L21 9 M19 12 L21 15" />
        </svg>
    )
}

/** 毛线球 */
export function YarnBall({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <circle cx="12" cy="12" r="8" />
            <path d="M6 8 Q10 5 14 7 Q18 9 17 14 Q16 19 11 18 Q6 17 7 12 Q8 7 13 8" />
            <path d="M4 13 Q2 18 7 21" />
        </svg>
    )
}

/** 灵剑 */
export function SpiritSword({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 3 L21 9 L11 19 L5 19 L5 13 Z" />
            <path d="M11 15 L15 11 M13 13 L17 9" opacity="0.7" />
            <path d="M5 19 L3 21 M8 18 L6 20" opacity="0.7" />
        </svg>
    )
}

/** 丹鼎 */
export function Cauldron({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 9 H18 L17 18 Q17 20 15 20 H9 Q7 20 7 18 Z" />
            <path d="M6 9 Q12 12 18 9" />
            <path d="M9 6 H15 M12 6 V3 M10 3 H14" />
            <path d="M8 20 L7 22 M16 20 L17 22" opacity="0.7" />
        </svg>
    )
}

/** 符箓 */
export function Talisman({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="5" y="3" width="14" height="18" rx="1" />
            <path d="M8 8 H16 M8 12 H14 M8 16 H16" />
            <path d="M10 12 L8 17 M14 12 L16 17" opacity="0.7" />
        </svg>
    )
}

/** 劫雷 */
export function Thunderbolt({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M13 3 L6 13 H11 L9 21 L18 10 H13 Z" fill="currentColor" stroke="none" opacity="0.85" />
            <path d="M13 3 L6 13 H11 L9 21 L18 10 H13 Z" />
        </svg>
    )
}

/** 莲花/仙途 */
export function Lotus({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 20 C6 18 5 11 12 6 C19 11 18 18 12 20 Z" />
            <path d="M12 20 C8 19 6 15 6 11 C9 12 11 14 12 20 Z M12 20 C16 19 18 15 18 11 C15 12 13 14 12 20 Z" opacity="0.8" />
            <path d="M9 5 Q12 3 15 5" />
        </svg>
    )
}

/** 月亮/月华 */
export function Moon({ size = 24 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 15 A8 8 0 1 1 9 4 A7 7 0 0 0 20 15 Z" />
            <path d="M15 6 Q16 7 15 8 M18 9 Q19 10 18 11" opacity="0.7" />
        </svg>
    )
}

/** 家养/流浪状态小图标 */
export function HomeStatus({ adopted, size = 20 }: { adopted: boolean; size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {adopted ? (
                <>
                    <path d="M4 11 L12 4 L20 11" />
                    <path d="M6 10 V19 H18 V10" />
                    <path d="M10 19 V14 H14 V19" />
                </>
            ) : (
                <>
                    <path d="M4 20 Q10 22 20 20" />
                    <path d="M7 15 Q10 13 14 14 Q18 15 18 12 Q18 9 15 8 Q13 4 10 5 Q8 6 8 9 Q5 9 6 12" />
                    <circle cx="9" cy="13" r="1" fill="currentColor" stroke="none" />
                    <circle cx="14" cy="14" r="1" fill="currentColor" stroke="none" />
                </>
            )}
        </svg>
    )
}
