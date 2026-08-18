import { useRemake, useGoAchv, useGoThanks } from '@remake/hooks'
import { TextSvg } from '@/components/TextSvg'
import { CatFace, Cloud, PawPrint, CatSilhouette, Sparkle } from '@/components/CatArt'
import ThemeToggle from '@/components/ThemeToggle'
import Github from '@/components/Github'
import './Home.css'

export default function Home() {
    const remake = useRemake()
    const goAchv = useGoAchv()
    const goThanks = useGoThanks()
    return (
        <div className="screen home">
            <div className="home-decor" aria-hidden="true">
                <Cloud size={72} />
                <Cloud size={48} />
                <CatSilhouette size={88} />
                <PawPrint size={24} />
                <PawPrint size={18} />
                <Sparkle size={20} />
                <Sparkle size={14} />
            </div>
            <div className="logo">
                <CatFace size={96} />
            </div>
            <div className="title">
                <TextSvg text="猫生模拟器" className="main" />
                <TextSvg text="投胎成一只猫" className="sub" size={7} />
            </div>
            <div className="controls">
                <div>
                    <button className="primary focus" onClick={remake}>
                        立即重开
                    </button>
                </div>
                <div>
                    <button className="secondary" onClick={goAchv}>
                        成就
                    </button>
                    <button className="secondary" onClick={goThanks}>
                        感谢
                    </button>
                </div>
            </div>
            <div className="repo-link">
                <a
                    href="https://github.com/TNTsama11/cat-life"
                    target="_blank"
                    rel="noreferrer"
                >
                    github.com/TNTsama11/cat-life
                </a>
            </div>
            <div className="actions">
                <Github />
                <ThemeToggle />
            </div>
        </div>
    )
}
