import { useImmortalAllocator, useImmortalRandomizer, useImmortalPoints, useImmortalSubmit } from '@remake/hooks'
import { immortalProperties } from '@/display'
import { keys } from '@remake/vitex'
import { judgeGradeByValue } from '@/config'
import { toastMsg } from '@/toast'
import { CatFace, RealmGlyph, Lotus, Cloud, Sparkle } from '@/components/CatArt'
import { Realm } from '@remake/data'
import './Alloc.css'

interface AllocInputProps {
    point: number
    onChange: (point: number) => void
}

function AllocInput(props: AllocInputProps) {
    return (
        <div className="allocation-input">
            <button onClick={() => props.onChange(props.point - 1)}>−</button>
            <input
                className="font-mono"
                type="number"
                value={props.point}
                onChange={e => props.onChange(Number(e.target.value))}
            />
            <button onClick={() => props.onChange(props.point + 1)}>+</button>
        </div>
    )
}

export function ImmortalAlloc() {
    const [alloc, allocator] = useImmortalAllocator()
    const random = useImmortalRandomizer()
    const { left } = useImmortalPoints()
    const submit = useImmortalSubmit()
    const handleSubmit = () => {
        if (left != 0) return toastMsg('还有剩余点数未分配', 'alloc-toast')
        submit()
    }
    return (
        <div className="screen point-allocation immortal-alloc">
            <div className="immortal-banner">
                <div className="banner-decor" aria-hidden="true">
                    <Cloud size={44} />
                    <Lotus size={28} />
                    <Sparkle size={18} />
                </div>
                <div className="transition">
                    <CatFace size={48} />
                    <span className="arrow">→</span>
                    <RealmGlyph realm={Realm.QiRefining} size={48} />
                </div>
                <h2>伐骨洗髓</h2>
                <p>仙缘已至，重铸仙根。人修有宗门，猫修有猫道——团身、踩奶、追尾、磨爪，皆可入道。</p>
            </div>
            <ul className="alloc classic">
                <li className={'left left-' + left}>
                    <span className="name">剩余点数</span>
                    <button className="font-mono">{left}</button>
                </li>
                {keys(alloc).map(key => (
                    <li
                        key={key}
                        className={'property grade-' + judgeGradeByValue(key, alloc[key])}
                    >
                        <span className="name">{immortalProperties[key]}</span>
                        <AllocInput
                            point={alloc[key]}
                            onChange={value => allocator(key, value)}
                        />
                    </li>
                ))}
            </ul>
            <div className="controls">
                <button className="secondary" onClick={() => random()}>
                    随机分配
                </button>
                <button
                    className={left ? 'error' : 'primary'}
                    onClick={handleSubmit}
                >
                    踏入修仙
                </button>
            </div>
        </div>
    )
}
export default ImmortalAlloc
