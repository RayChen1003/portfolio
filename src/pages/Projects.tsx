import { projects } from '../data'
import SectionHeader from '../components/SectionHeader'

export default function Projects() {
  const featured = projects.find(p => p.featured)!
  const others = projects.filter(p => !p.featured)

  return (
    <div className="pt-[calc(68px+4rem)] pb-24 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="mb-10">
        <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Projects</div>
        <h1 className="font-display font-extrabold text-4xl md:text-6xl mb-4">專案作品</h1>
        <p className="text-muted text-sm max-w-lg leading-relaxed">從 AI 研究到全端開發、DevOps 實作，這些是我親手打造的作品。</p>
      </div>

      {/* Featured */}
      <div className="relative bg-surface border border-accent/20 rounded-xl p-6 md:p-8 mb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72
          bg-[radial-gradient(circle_at_top_right,rgba(212,170,63,0.08),transparent_65%)] pointer-events-none" />
        <div className="inline-flex font-mono text-xs text-accent border border-accent/30
          px-3 py-1 rounded-full tracking-widest mb-5">論文專案 · Thesis</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display font-extrabold text-3xl mb-3">{featured.title}</h2>
            <p className="text-muted text-sm leading-relaxed mb-2">{featured.desc}</p>
            <p className="text-muted text-sm leading-relaxed mb-5">{featured.longDesc}</p>

            {/* Metrics */}
            {featured.metrics && (
              <div className="flex gap-6 bg-surface-2 border border-subtle rounded-lg p-4 mb-5">
                {featured.metrics.map(m => (
                  <div key={m.label} className="text-center">
                    <span className="block font-mono text-2xl font-bold text-accent">{m.val}</span>
                    <span className="font-mono text-xs text-dim">{m.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 mb-5">
              {featured.tech.map(t => (
                <span key={t} className="font-mono text-xs px-2 py-1 bg-surface-2
                  border border-white/13 rounded text-muted">{t}</span>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap">
              {featured.demo && (
                <a href={featured.demo} target="_blank" rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-accent text-bg font-mono text-xs font-bold rounded
                    hover:bg-[#f5e6b8] transition-all hover:shadow-[0_0_24px_rgba(212,170,63,0.4)] tracking-widest">
                  Live Demo ↗
                </a>
              )}
              <a href={featured.github} target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 bg-transparent font-mono text-xs text-muted rounded
                  border border-white/15 hover:border-accent hover:text-white hover:bg-accent/10 transition-all tracking-widest">
                GitHub ↗
              </a>
            </div>
          </div>

          {/* 2048 visual board */}
          <div className="bg-bg rounded-xl overflow-hidden border border-white/13">
            <div className="bg-surface-2 border-b border-subtle px-4 py-2.5 font-mono text-xs text-muted">
              2048 AI — Expectimax
            </div>
            <div className="p-3 flex flex-col gap-1.5">
              {[
                ['2048', '1024', '512', '256'],
                ['128', '64', '32', '16'],
                ['8', '4', '2', '4'],
                ['2', '', '2', ''],
              ].map((row, ri) => (
                <div key={ri} className="grid grid-cols-4 gap-1.5">
                  {row.map((cell, ci) => {
                    const colorMap: Record<string, string> = {
                      '2048': 'bg-gradient-to-br from-amber-400 to-red-500 shadow-[0_0_12px_rgba(245,158,11,0.4)]',
                      '1024': 'bg-amber-600', '512': 'bg-red-700', '256': 'bg-purple-700',
                      '128': 'bg-purple-900', '64': 'bg-blue-800', '32': 'bg-blue-900',
                      '16': 'bg-green-800', '8': 'bg-slate-600', '4': 'bg-slate-700', '2': 'bg-slate-800',
                    }
                    return (
                      <div key={ci} className={`aspect-square rounded flex items-center justify-center
                        font-mono font-bold text-xs text-white
                        ${cell ? colorMap[cell] || 'bg-slate-700' : 'bg-white/3'}`}>
                        {cell}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center px-3 py-2 border-t border-subtle
              font-mono text-xs text-muted">
              <span>Score: <span className="text-white font-bold">248,640</span></span>
              <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent border border-accent/20 rounded-full">
                AI Playing
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Other projects */}
      <SectionHeader num="Other" title="其他專案" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {others.map(p => (
          <div key={p.id} className="bg-surface border border-subtle rounded-lg p-5
            hover:border-white/20 hover:-translate-y-0.5 transition-all">
            <div className="flex justify-between items-center mb-3">
              <div className="font-mono text-xs text-accent tracking-widest uppercase">{p.tag}</div>
            </div>
            <h3 className="font-display font-bold text-base mb-2">{p.title}</h3>
            <p className="text-muted text-sm leading-relaxed mb-3">{p.desc}</p>
            <div className="flex flex-wrap gap-1 mb-4">
              {p.tech.map(t => (
                <span key={t} className="font-mono text-xs px-1.5 py-0.5 bg-surface-2
                  border border-subtle rounded text-dim">{t}</span>
              ))}
            </div>
            <a href={p.github} target="_blank" rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-accent transition-colors">GitHub ↗</a>
          </div>
        ))}
      </div>
    </div>
  )
}
