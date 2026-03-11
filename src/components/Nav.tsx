import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: '首頁' },
  { to: '/about', label: '關於我' },
  { to: '/projects', label: '專案' },
  { to: '/esports', label: '電競' },
  { to: '/music', label: '音樂' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-xl border-b border-subtle">
        <div className="h-[68px] flex items-center justify-between px-6 md:px-10">
          <NavLink to="/" className="font-mono text-lg tracking-wide" onClick={() => setOpen(false)}>
            <span className="text-accent">[</span>
            <span className="font-bold">RC</span>
            <span className="text-accent">]</span>
          </NavLink>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `font-mono text-xs tracking-widest uppercase transition-colors relative group
                     ${isActive ? 'text-white' : 'text-muted hover:text-white'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      <span className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300
                        ${isActive ? 'right-0' : 'right-full group-hover:right-0'}`} />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
            <li>
              <a href="/portfolio/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest px-3 py-1.5 border border-accent/50
                  text-accent rounded hover:bg-accent/10 transition-all">
                履歷 ↓
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} className={`block w-5 h-px bg-white transition-all duration-300
                ${open && i === 0 ? 'rotate-45 translate-y-2' : ''}
                ${open && i === 1 ? 'opacity-0' : ''}
                ${open && i === 2 ? '-rotate-45 -translate-y-2' : ''}`}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu — animated push down */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? 'max-h-96' : 'max-h-0'}`}>
          <div className="border-t border-subtle">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block font-mono text-sm py-4 px-6 border-b border-subtle transition-colors
                   ${isActive ? 'text-accent bg-accent/5' : 'text-muted hover:text-white hover:bg-white/5'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a href="/portfolio/resume.pdf" target="_blank" rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block font-mono text-sm py-4 px-6 text-accent hover:bg-accent/5 transition-colors">
              履歷 ↓
            </a>
          </div>
        </div>
      </nav>

      {/* Dynamic spacer */}
      <div className={`md:hidden transition-all duration-300 ease-in-out
        ${open ? 'h-[calc(68px+294px)]' : 'h-[68px]'}`} />
    </>
  )
}
