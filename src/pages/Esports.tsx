import { useEffect, useRef, useState } from 'react'
import { esportsCareer } from '../data'
import SectionHeader from '../components/SectionHeader'

function EarningsBar({ year, amount, pct, isGold }: { year: string; amount: number; pct: number; isGold?: boolean }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimated(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="grid grid-cols-[40px_1fr_70px] items-center gap-3">
      <span className="font-mono text-xs text-dim">{year}</span>
      <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${isGold ? 'bg-gold' : 'bg-accent'}`}
          style={{ width: animated ? `${pct}%` : '0%' }}
        />
      </div>
      <span className={`font-mono text-xs text-right ${isGold ? 'text-gold' : 'text-muted'}`}>
        ${amount.toLocaleString()}
      </span>
    </div>
  )
}

export default function Esports() {
  const e = esportsCareer

  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(212,170,63,0.04),transparent)] pointer-events-none" />

      <div className="pt-[calc(68px+4rem)] pb-24 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="mb-10">
          <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Esports Career</div>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mb-4">電競經歷</h1>
          <p className="text-muted text-sm max-w-lg leading-relaxed">
            2019 年至 2023 年，以職業選手身份代表台灣征戰 Rainbow Six Siege 賽場。
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-surface border border-white/13
          rounded-xl overflow-hidden mb-14">
          {[
            { num: '4+', label: '職業生涯年份' },
            { num: '$23K+', label: '累計賽事收益 USD' },
            { num: e.lastTeam, label: '最後效力隊伍' },
            { num: '🇹🇼', label: '代表台灣出賽' },
          ].map((s, i) => (
            <div key={i} className={`py-6 text-center ${i > 0 ? 'border-l border-subtle' : ''}`}>
              <span className="block font-display text-xl font-extrabold text-gold mb-1">{s.num}</span>
              <span className="font-mono text-xs text-dim tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Profile + earnings */}
        <section className="mb-16">
          <SectionHeader num="Profile" title="選手資料" />
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 items-start">
            {/* Player card */}
            <div className="relative bg-gradient-to-br from-[#1c1500] via-[#2a1f00] to-[#1a1200]
              border border-gold/25 rounded-xl p-8 text-center overflow-hidden
              shadow-[0_0_50px_rgba(212,170,63,0.06)]">
              <div className="absolute inset-0 flex items-center justify-center
                font-display text-[8rem] font-extrabold text-gold/[0.04] select-none pointer-events-none tracking-tighter">
                RAY
              </div>
              <div className="relative">
                <div className="font-mono text-[0.6rem] tracking-[0.25em] text-gold/60 uppercase mb-1">
                  Professional Player
                </div>
                <div className="text-sm text-muted mb-4">{e.game}</div>
                <div className="font-display text-6xl font-extrabold text-gold leading-none mb-2
                  drop-shadow-[0_0_40px_rgba(212,170,63,0.5)]">Ray</div>
                <div className="text-sm text-muted mb-2">Chen Rui-Wei · 陳睿為</div>
                <div className="text-sm text-muted mb-6">{e.country}</div>
                <a href={e.liquipedia} target="_blank" rel="noopener noreferrer"
                  className="inline-block px-4 py-2 font-mono text-xs text-accent border border-accent
                    rounded hover:bg-accent/10 transition-all tracking-widest">
                  Liquipedia ↗
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold mb-3">關於電競生涯</h3>
              <p className="text-muted text-sm leading-relaxed mb-3">
                從 2019 年踏入職業電競圈，Ray 在 Rainbow Six Siege 中代表台灣與多支亞太職業隊伍出賽。電競生涯最高峰年份達到收益近 $10,600 USD（2023年）。
              </p>
              <p className="text-muted text-sm leading-relaxed mb-6">
                電競的高壓環境培養了在快速決策、跨國團隊溝通、壓力下保持高效能等方面的能力，這些軟實力直接轉化為工程師職涯中的競爭優勢。
              </p>

              <div className="bg-surface border border-subtle rounded-lg p-5">
                <div className="font-mono text-xs text-muted tracking-widest uppercase mb-4">年度收益概覽</div>
                <div className="flex flex-col gap-3">
                  {e.yearlyEarnings.map(y => (
                    <EarningsBar key={y.year} {...y} isGold={y.year === '2023'} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transferable skills */}
        <section>
          <SectionHeader num="Soft Skills" title="電競 → 工程師的能力轉化" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {e.transferableSkills.map(s => (
              <div key={s.title} className="bg-surface border border-subtle rounded-lg p-5
                hover:border-gold/20 hover:-translate-y-0.5 transition-all">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h4 className="font-display font-bold text-sm mb-2">{s.title}</h4>
                <p className="text-muted text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
