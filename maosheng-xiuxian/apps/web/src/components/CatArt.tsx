import type { Realm } from '@remake/data'
import { Realm as R } from '@remake/data'

/** 猫脸 Logo（纯 SVG，currentColor 自适应主题） */
export function CatFace({ size = 64 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <circle cx="20" cy="24" r="5" fill="currentColor" />
            <circle cx="44" cy="24" r="5" fill="currentColor" />
            <circle cx="20" cy="23" r="2" fill="var(--base-background-color)" />
            <circle cx="44" cy="23" r="2" fill="var(--base-background-color)" />
            <path d="M18 8 L24 18 L20 20 Z" fill="currentColor" />
            <path d="M46 8 L40 18 L44 20 Z" fill="currentColor" />
            <path d="M22 8 L27 17 L25 19 Z" fill="currentColor" opacity="0.7" />
            <path d="M42 8 L37 17 L39 19 Z" fill="currentColor" opacity="0.7" />
            <path d="M32 30 L36 36 L32 38 L28 36 Z" fill="currentColor" opacity="0.9" />
            <path d="M26 38 Q32 44 38 38" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M32 38 Q32 46 28 50 M32 38 Q32 46 36 50" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.35" />
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
