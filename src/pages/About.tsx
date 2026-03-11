import { profile, skills, timeline } from '../data'
import SectionHeader from '../components/SectionHeader'

export default function About() {
  return (
    <div className="pt-[calc(68px+4rem)] pb-24 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="mb-10">
        <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3">About Me</div>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl mb-4">關於我</h1>
        <p className="text-muted text-sm max-w-lg leading-relaxed">工程師、研究者，也是前職業電競選手。這就是我的故事。</p>
      </div>

      {/* Bio */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
          <div>
            <h2 className="font-display text-2xl font-bold mb-5">簡介</h2>
            {profile.bio.map((p, i) => (
              <p key={i} className="text-muted text-sm leading-relaxed mb-3">{p}</p>
            ))}
          </div>

          <div>
            {/* JSON card */}
            <div className="bg-surface border border-white/13 rounded-xl overflow-hidden font-mono mb-3">
              <div className="bg-surface-2 border-b border-subtle px-4 py-2.5 text-xs text-muted">
                <span className="text-accent mr-2">~</span>cat info.json
              </div>
              <div className="p-4 text-xs leading-[2.1]">
                {[
                  ['name', `"${profile.nameEn}"`],
                  ['location', `"${profile.location}"`],
                  ['education', `"${profile.education}"`],
                  ['university', `"${profile.university}"`],
                  ['grad_year', String(profile.gradYear)],
                  ['status', `"${profile.status}"`],
                  ['github', '"RayChen1003"'],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-1">
                    <span className="text-[#79b8ff]">"{k}"</span>
                    <span className="text-dim">:</span>
                    <span className={k === 'status' ? 'text-accent' : 'text-[#f1e05a]'}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              {[
                { href: profile.github, label: 'GitHub' },
                { href: profile.liquipedia, label: '🎮 Liquipedia' },
              ].map(l => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-white/13
                    rounded font-mono text-xs text-muted hover:text-accent hover:border-accent hover:bg-accent/10 transition-all">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <SectionHeader num="Skills" title="技術能力" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map(group => (
            <div key={group.category} className="bg-surface border border-subtle rounded-lg p-5">
              <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                {group.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map(s => (
                  <span key={s.name}
                    className={`font-mono text-xs px-2 py-1 rounded border transition-colors
                      ${s.level === 'top'
                        ? 'border-accent/25 text-white bg-surface-2'
                        : 'border-subtle text-muted bg-surface-2 hover:border-white/20'}`}>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <SectionHeader num="Timeline" title="學歷 & 經歷" />
        <div className="relative pl-8">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-white/10 to-transparent" />
          {timeline.map((item, i) => (
            <div key={i} className="relative grid grid-cols-[110px_1fr] gap-4 mb-10">
              <div className={`absolute -left-[1.75rem] top-1 w-2.5 h-2.5 rounded-full border-2 border-bg
                ${item.accent ? 'bg-gold shadow-[0_0_8px_rgba(212,170,63,0.5)]' : 'bg-accent shadow-[0_0_8px_rgba(212,170,63,0.4)]'}`} />
              <span className="font-mono text-xs text-dim pt-0.5">{item.period}</span>
              <div>
                <div className="font-display font-bold text-base mb-0.5">{item.title}</div>
                <div className={`font-mono text-xs mb-1 ${item.accent ? 'text-gold' : 'text-accent'}`}>{item.place}</div>
                <div className="text-muted text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
