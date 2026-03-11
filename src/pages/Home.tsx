import { Link } from 'react-router-dom'
import { profile, projects, techStrip } from '../data'
import { useRoleRotator } from '../hooks/useRoleRotator'

const terminalLines = [
  { prompt: true, text: 'whoami' },
  { prompt: false, text: 'Ray Chen / Software Engineer / Ex-Pro Gamer' },
  { prompt: true, text: 'cat skills.txt' },
  { prompt: false, text: 'Python · Go · JavaScript · React · Docker · K8s' },
  { prompt: true, text: 'ls ./projects' },
  { prompt: false, text: '2048-ai/  cstoday/  go-healthcheck/  crypto-monitor/' },
]

export default function Home() {
  const { role, visible } = useRoleRotator(profile.roles)
  const strip = [...techStrip, ...techStrip]

  return (
    <div>
      {/* Fixed grid background */}
      <div className="fixed inset-0 -z-10 bg-grid pointer-events-none" />

      {/* Hero */}
      <section className="min-h-screen pt-[calc(68px+5rem)] pb-16 px-6 md:px-10
        grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
            bg-accent/10 border border-accent/20 font-mono text-xs text-accent tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse2" />
            Available for opportunities
          </div>

          <div className="mb-4">
            <h1 className="font-display font-extrabold leading-[1.15] tracking-tight
              text-5xl md:text-7xl text-white">{profile.nameEn}</h1>
            <p className="font-sans font-light tracking-[0.2em] text-muted mt-1 text-base md:text-xl">
              {profile.nameZh}
            </p>
          </div>

          <div className="font-mono text-accent text-base mb-6 h-6">
            <span className={`transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
              {role}
            </span>
          </div>

          <p className="text-muted text-sm leading-relaxed mb-8 max-w-md">
            中原大學智慧計算與大數據碩士畢業<br />
            專注於 AI 演算法、全端開發與 DevOps<br />
            前職業 Rainbow Six Siege 電競選手
          </p>

          <div className="flex gap-3 mb-10 flex-wrap">
            <Link to="/projects"
              className="px-5 py-2.5 bg-accent text-bg font-mono text-xs font-bold tracking-widest
                rounded hover:bg-[#f5e6b8] transition-all hover:shadow-[0_0_24px_rgba(212,170,63,0.4)]">
              查看專案
            </Link>
            <Link to="/about"
              className="px-5 py-2.5 bg-transparent text-muted font-mono text-xs tracking-widest
                rounded border border-white/15 hover:border-accent hover:text-white hover:bg-accent/10 transition-all">
              了解更多
            </Link>
            <a href="/portfolio/resume.pdf" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 bg-transparent text-accent font-mono text-xs tracking-widest
                rounded border border-accent/50 hover:bg-accent/10 transition-all">
              履歷下載 ↓
            </a>
          </div>

          <div className="flex items-center gap-6">
            {[
              { num: '5+', label: '技術專案' },
              { num: '2026', label: '畢業年份' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-6">
                {i > 0 && <div className="w-px h-9 bg-white/10" />}
                <div className="text-center">
                  <span className="block font-mono text-xl font-bold text-white">{s.num}</span>
                  <span className="font-mono text-xs text-dim">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal */}
        <div className="hidden lg:block rounded-xl overflow-hidden border border-white/13
          shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(212,170,63,0.06)]">
          <div className="flex items-center gap-1.5 px-4 py-3 bg-surface-2 border-b border-subtle">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="font-mono text-xs text-dim ml-2">ray@portfolio ~</span>
          </div>
          <div className="p-5 font-mono text-sm leading-loose bg-surface">
            {terminalLines.map((l, i) => (
              <div key={i} className={l.prompt ? 'flex gap-2' : 'text-muted pl-4'}>
                {l.prompt && <span className="text-accent">~</span>}
                <span className={l.prompt ? 'text-white' : ''}>{l.text}</span>
              </div>
            ))}
            <div className="flex gap-2">
              <span className="text-accent">~</span>
              <span className="text-white animate-blink">_</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech strip */}
      <div className="overflow-hidden border-y border-subtle bg-bg py-3">
        <div className="flex w-max animate-ticker gap-10">
          {strip.map((t, i) => (
            <span key={i} className="font-mono text-xs text-dim tracking-widest uppercase
              hover:text-accent transition-colors cursor-default">{t}</span>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <section className="py-24 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs text-accent tracking-widest">01</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold">精選專案</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {projects.slice(0, 3).map((p, i) => (
            <div key={p.id}
              className={`bg-surface rounded-lg p-6 border transition-all hover:-translate-y-1 relative overflow-hidden
                ${i === 0 ? 'border-accent/20 hover:border-accent lg:col-span-1' : 'border-subtle hover:border-white/15'}`}>
              {i === 0 && (
                <div className="absolute top-0 right-0 w-20 h-20
                  bg-[radial-gradient(circle_at_top_right,rgba(212,170,63,0.12),transparent_70%)]" />
              )}
              <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3">{p.tag}</div>
              <h3 className="font-display text-base font-bold mb-2">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.slice(0, 4).map(t => (
                  <span key={t} className="font-mono text-xs px-2 py-0.5 bg-surface-2
                    border border-subtle rounded text-dim">{t}</span>
                ))}
              </div>
              <div className="flex gap-4">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-xs text-muted hover:text-accent transition-colors">Demo ↗</a>
                )}
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs text-muted hover:text-accent transition-colors">GitHub ↗</a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/projects"
            className="inline-block px-5 py-2.5 font-mono text-xs text-accent border border-accent
              rounded hover:bg-accent/10 transition-all tracking-widest">
            所有專案 →
          </Link>
        </div>
      </section>

      {/* Esports teaser */}
      <section className="py-24 px-6 md:px-10 relative overflow-hidden
        before:absolute before:inset-0 before:-z-10
        before:bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(212,170,63,0.04),transparent)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-xs text-accent tracking-widest">02</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold">電競經歷</h2>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted text-sm leading-relaxed mb-6">
                前台灣職業 Rainbow Six Siege 選手，曾代表 Dire Wolves 等隊伍出賽，累計賽事收益超過 $23,000 USD
              </p>
              <div className="flex gap-8 mb-8">
                {[
                  { num: '2019–2023', label: '職業生涯' },
                  { num: 'Dire Wolves', label: '最後隊伍' },
                  { num: '🇹🇼', label: '代表台灣' },
                ].map((h, i) => (
                  <div key={i}>
                    <span className="block font-mono text-sm font-bold text-gold">{h.num}</span>
                    <span className="font-mono text-xs text-dim">{h.label}</span>
                  </div>
                ))}
              </div>
              <Link to="/esports"
                className="inline-block px-5 py-2.5 font-mono text-xs text-muted
                  border border-white/15 rounded hover:border-accent hover:text-white hover:bg-accent/10 transition-all tracking-widest">
                查看完整經歷 →
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="max-w-xs mx-auto bg-gradient-to-br from-[#1c1500] to-[#2a1f00]
                border border-gold/25 rounded-xl p-8 text-center
                shadow-[0_0_50px_rgba(212,170,63,0.06)]">
                <div className="font-mono text-[0.6rem] tracking-[0.25em] text-gold/60 uppercase mb-1">
                  Professional Player
                </div>
                <div className="text-sm text-muted mb-4">Rainbow Six Siege</div>
                <div className="font-display text-6xl font-extrabold text-gold leading-none mb-2
                  drop-shadow-[0_0_30px_rgba(212,170,63,0.5)]">Ray</div>
                <div className="text-sm text-muted mb-2">Chen Rui-Wei · 陳睿為</div>
                <div>🇹🇼 Taiwan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music teaser */}
      <section className="py-24 px-6 md:px-10 text-center">
        <div className="flex items-center gap-4 mb-10 max-w-6xl mx-auto">
          <span className="font-mono text-xs text-accent tracking-widest">03</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold">我的音樂</h2>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <p className="text-muted text-sm mb-6">5 張歌單，不同的情緒與時刻</p>
        <Link to="/music"
          className="inline-block px-5 py-2.5 font-mono text-xs text-accent border border-accent
            rounded hover:bg-accent/10 transition-all tracking-widest">
          進入音樂頁面 ♪
        </Link>
      </section>
    </div>
  )
}
