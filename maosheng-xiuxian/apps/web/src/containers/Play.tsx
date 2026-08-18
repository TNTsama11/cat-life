import { useState, useRef, useCallback } from 'react'
import { useLayoutEffect, useEffect } from 'react'
import { useNext, useGotoSummary, useGameState, useSetGameState, useSetStep, Step, type Log } from '@remake/hooks'
import { useJudge } from '@/hooks/judge'
import { achievements, events, talents, REALMS } from '@remake/data'
import { properties, immortalProperties } from '@/display'
import { AutoInterval, judgeGradeByValue } from '@/config'
import { format, keys } from '@remake/vitex'
import { toastAchvs } from '@/toast/Achv'
import {
    RealmGlyph,
    HomeStatus,
    PawPrint,
    CatSilhouette,
    SpiritSword,
    Cauldron,
    Talisman,
    Thunderbolt,
    Lotus,
    Moon,
    Cloud,
} from '@/components/CatArt'
import './Play.css'

function LogTalent({ id }: { id: number }) {
    const { name, description, grade } = talents.get(id)!
    return (
        <li className={'grade-' + grade}>
            <span className="tag font-mono">[天赋]</span>
            <span className="name">{name}</span>
            <span className="description">{description}</span>
        </li>
    )
}

function LogTalents({ items }: { items: number[] }) {
    if (items.length === 0) return null
    const els = items.map(id => <LogTalent key={id} id={id} />)
    return <ul className="log-inner log-talents">{els}</ul>
}

const year = new Date().getFullYear()

const effectLabels: Record<string, string> = {
    CHR: properties.charm,
    INT: properties.intelligence,
    STR: properties.strength,
    MNY: properties.money,
    SPR: properties.spirit,
    LIF: '寿元',
    AGE: properties.age,
    SEED: '仙缘',
    DAO: '道韵',
    DEMON: '心魔',
    STER: '绝育',
}
const immortalEffectLabels: Record<string, string> = {
    CULT: '修为',
    SE: '灵气',
    DAO: '道韵',
    DEMON: '心魔',
    EXPO: '暴露度',
    APT: immortalProperties.aptitude,
    COMP: immortalProperties.comprehension,
    PHY: immortalProperties.physique,
    FOR: immortalProperties.fortune,
    SPC: immortalProperties.spiritCharm,
}
interface EventDelta {
    label: string
    value: number
    special?: boolean
}
function collectEventDeltas(id: number): EventDelta[] {
    const item = events.get(id)
    if (!item) return []
    const deltas: EventDelta[] = []
    if (item.effect) {
        for (const [key, value] of Object.entries(item.effect)) {
            if (!value) continue
            const label = effectLabels[key]
            if (!label) continue
            deltas.push({ label, value, special: key === 'STER' })
        }
    }
    if (item.immortalEffect) {
        for (const [key, value] of Object.entries(item.immortalEffect)) {
            if (!value) continue
            const label = immortalEffectLabels[key]
            if (!label) continue
            deltas.push({ label, value })
        }
    }
    return deltas
}

interface LogEventProps {
    id: number
    post: boolean
    index: number
}
function EventIcon({ id, size = 18 }: { id: number; size?: number }) {
    const item = events.get(id)
    if (!item) return null
    if (item.washMarrow) return <CatSilhouette size={size} />
    if (item.ascension) return <Lotus size={size} />
    if (item.tribulation) return <Thunderbolt size={size} />
    if (item.breakthrough) return <SpiritSword size={size} />
    switch (item.realm) {
        case 1: return <Moon size={size} />
        case 2: return <Cauldron size={size} />
        case 3: return <SpiritSword size={size} />
        case 4: return <Lotus size={size} />
        case 5: return <Talisman size={size} />
        case 6: return <Thunderbolt size={size} />
        default: return <PawPrint size={size} />
    }
}

function LogEvent({ id, post, index }: LogEventProps) {
    let { event, postEvent, grade, format: f } = events.get(id)!
    const deltas = collectEventDeltas(id)
    if (f) {
        const g = (key: string) => ({ CurrentYear: year + index })[key]
        event = format(event, g)
        if (post && postEvent) postEvent = format(postEvent, g)
    }
    return (
        <>
            <li className={'grade-' + grade}>
                <span className="event-icon">
                    <EventIcon id={id} />
                </span>
                <span>{event}</span>
            </li>
            {deltas.length > 0 && (
                <li className="event-effects">
                    {deltas.map((d, i) => (
                        <em key={i} className={d.value > 0 ? 'pos' : 'neg'}>
                            {d.special
                                ? d.label
                                : `${d.label}${d.value > 0 ? '+' : ''}${d.value}`}
                        </em>
                    ))}
                </li>
            )}
            {post && postEvent && (
                <li className={'grade-' + grade}>
                    <span className="event-icon">
                        <EventIcon id={id} />
                    </span>
                    <span>{postEvent}</span>
                </li>
            )}
        </>
    )
}

function LogEvents({ items, index }: { items: number[]; index: number }) {
    const last = items.length - 1
    const els = items.map((id, i) => (
        <LogEvent key={id} id={id} post={i == last} index={index} />
    ))
    return <ul className="log-inner log-events">{els}</ul>
}

function LogAchievement({ id }: { id: number }) {
    const { name, description, grade } = achievements.get(id)!
    return (
        <li className={'grade-' + grade}>
            <span className="tag font-mono">[成就]</span>
            <span className="name">{name}</span>
            <span className="description">{description}</span>
        </li>
    )
}

function LogAchievements({ items }: { items: number[] }) {
    if (items.length === 0) return null
    const els = items.map(id => <LogAchievement key={id} id={id} />)
    return <ul className="log-inner log-achievements">{els}</ul>
}

function Log({ log, index }: { log: Log; index: number }) {
    return (
        <li className="log">
            <span className="age font-mono">{log.age}岁</span>
            <div className="content">
                <LogTalents items={log.talents} />
                <LogEvents items={log.events} index={index} />
                <LogAchievements items={log.achievements} />
            </div>
        </li>
    )
}

interface PropProps {
    prop: keyof typeof properties
    value: number
    grade: number
}

function Prop({ prop, value, grade }: PropProps) {
    const prevRef = useRef<number>(value)
    const [trend, setTrend] = useState<'up' | 'down' | 'normal'>('normal')
    const [flip, setFlip] = useState(0)
    const [displayValue, setDisplayValue] = useState<number>(value)
    useEffect(() => {
        const prev = prevRef.current
        if (value === prev) return
        const startValue = prevRef.current
        prevRef.current = value
        setTrend(value > prev ? 'up' : 'down')
        setFlip(f => (f + 1) % 2)
        let startTimestamp: number | null = null
        const duration = 400
        let end = false
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = timestamp - startTimestamp
            const progressRatio = Math.min(progress / duration, 1)
            const easeOutQuad = progressRatio * (2 - progressRatio)
            const currentDec = startValue + (value - startValue) * easeOutQuad
            setDisplayValue(Math.round(currentDec))
            if (!end && progress < duration) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
        const timer = setTimeout(() => setTrend('normal'), 2000)
        return () => {
            clearTimeout(timer)
            setDisplayValue(value)
            end = true
        }
    }, [value])

    return (
        <li className={prop + ' grade-' + grade + ' trend-' + trend + '-' + flip}>
            <span className="name">{properties[prop]}</span>
            <span className="value font-mono">{displayValue}</span>
        </li>
    )
}

function Properties() {
    const judges = useJudge()
    return (
        <ul className="properties">
            {judges.map(([key, { value, grade }]) => (
                <Prop key={key} prop={key} value={value} grade={grade} />
            ))}
        </ul>
    )
}

function ImmortalProperties() {
    const state = useGameState()
    if (!state?.immortal) return null
    const im = state.immortal.current
    return (
        <ul className="properties immortal">
            {keys(im).map(key => (
                <li key={key} className={key + ' grade-' + judgeGradeByValue(key, im[key])}>
                    <span className="name">{immortalProperties[key]}</span>
                    <span className="value font-mono">{im[key]}</span>
                </li>
            ))}
        </ul>
    )
}

function ImmortalHUD() {
    const state = useGameState()
    const setState = useSetGameState()
    if (!state || state.phase !== 'immortal') return null
    const info = REALMS[state.realm]!
    const next = REALMS[state.realm + 1]
    const progress = next
        ? Math.min(100, Math.floor((state.cultivation / next.threshold) * 100))
        : 100
    const toggleStance = () => {
        setState(prev =>
            prev
                ? { ...prev, stance: prev.stance === 'hide' ? 'fame' : 'hide' }
                : prev,
        )
    }
    return (
        <div className="immortal-hud">
            <div className="realm-badge">
                <RealmGlyph realm={state.realm} size={24} />
                {info.name}
                {info.humanName !== info.name && (
                    <span className="human-name">（人修称{info.humanName}）</span>
                )}
            </div>
            <div className="cultivation">
                <span className="label">
                    修为 {state.cultivation}
                    {next ? ' / ' + next.threshold : ''}
                </span>
                <div className="bar">
                    <div className="fill" style={{ width: progress + '%' }} />
                </div>
            </div>
            <div className="exposure">
                <span className="label">
                    妖踪暴露度 {state.exposure}
                </span>
                <div className="bar">
                    <div className="fill" style={{ width: state.exposure + '%' }} />
                </div>
                <button className={'stance ' + state.stance} onClick={toggleStance}>
                    {state.stance === 'hide' ? '藏拙' : '扬名'}
                </button>
            </div>
            <div className="meta">
                寿元 {state.lifespan} · 猫龄 {state.props.current.age} · 道韵 {state.daoInsight} · 心魔 {state.demonHeart}
            </div>
        </div>
    )
}

function MortalStatus() {
    const state = useGameState()
    const setState = useSetGameState()
    if (!state || state.phase !== 'mortal') return null
    const toggleRomance = () => {
        setState(prev =>
            prev ? { ...prev, romanceEnabled: !prev.romanceEnabled } : prev,
        )
    }
    return (
        <div className={'mortal-status ' + (state.adopted ? 'adopted' : 'stray')}>
            <HomeStatus adopted={state.adopted} size={22} />
            <span>
                {state.adopted
                    ? state.habitat === 'urban' ? '城市家猫' : '农村家猫'
                    : '流浪猫'}
                {' · '}
                {state.gender === 'male' ? '公猫' : '母猫'}
            </span>
            {state.sterilized && <span className="sterilized">已绝育</span>}
            <button
                className={'romance-toggle ' + (state.romanceEnabled ? 'on' : 'off')}
                onClick={toggleRomance}
            >
                情感生育：{state.romanceEnabled ? '开' : '关'}
            </button>
            {state.immortalSeed > 0 && (
                <span className="seed">仙缘线索 {state.immortalSeed}/2</span>
            )}
        </div>
    )
}

function StatsPanel() {
    const state = useGameState()
    if (state?.phase === 'immortal') {
        return (
            <>
                <ImmortalHUD />
                <ImmortalProperties />
            </>
        )
    }
    return (
        <>
            <MortalStatus />
            <Properties />
        </>
    )
}

export function Play() {
    const [{ logs, ended }, next] = useNext()
    const state = useGameState()
    const setStep = useSetStep()
    const [auto, setAuto] = useState(false)
    const logRef = useRef<HTMLUListElement>(null)
    const autoRef = useRef(0)
    const gotoSummary = useGotoSummary()
    const handleNext = useCallback(() => {
        if (ended) return
        const achievements = next()
        toastAchvs(achievements)
    }, [ended, next])
    const handleGotoSummary = useCallback(() => {
        if (!ended) return
        const achievements = gotoSummary()
        toastAchvs(achievements)
    }, [ended, gotoSummary])
    useLayoutEffect(() => {
        requestAnimationFrame(() => {
            if (!logRef.current) return
            logRef.current.scrollTop = logRef.current.scrollHeight
        })
    }, [logs])
    useEffect(() => {
        if (!auto) window.clearInterval(autoRef.current)
        else autoRef.current = window.setInterval(handleNext, AutoInterval)
        return () => window.clearInterval(autoRef.current)
    }, [auto, handleNext])
    useEffect(() => {
        if (state?.pendingImmortalAlloc) setStep(Step.ImmortalAlloc)
    }, [state?.pendingImmortalAlloc, setStep])
    return (
        <div className="screen play">
            <div className="play-decor" aria-hidden="true">
                <Cloud size={64} />
                <Moon size={36} />
                <PawPrint size={22} />
                <PawPrint size={16} />
            </div>
            <StatsPanel />
            <ul
                className="logs hide-scrollbar"
                onClick={handleNext}
                ref={logRef}
            >
                {logs.map((log, index) => (
                    <Log key={index} log={log} index={index} />
                ))}
            </ul>
            <div className="controls">
                {!ended && (
                    <button className="primary" onClick={() => setAuto(!auto)}>
                        {auto ? '关闭自动' : '开启自动'}
                    </button>
                )}
                {ended && (
                    <button className="primary" onClick={handleGotoSummary}>
                        猫生总结
                    </button>
                )}
            </div>
        </div>
    )
}

export default Play
