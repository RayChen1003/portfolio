import { useState } from 'react'
import { playlists } from '../data'

export default function Music() {
  const [active, setActive] = useState(playlists[0])

  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10 pointer-events-none
        bg-[radial-gradient(ellipse_60%_40%_at_20%_80%,rgba(29,185,84,0.04),transparent),
            radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(212,170,63,0.03),transparent)]" />

      <div className="pt-[calc(68px+4rem)] pb-24 px-6 md:px-10 max-w-4xl mx-auto">
        <div className="mb-10">
          <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Music</div>
          <h1 className="font-display font-extrabold text-4xl md:text-6xl mb-4">我的歌單</h1>
          <p className="text-muted text-sm">不同情境、不同心情的五張精選歌單</p>
        </div>

        {/* Active player */}
        <div className="bg-surface border border-white/13 rounded-xl overflow-hidden mb-8">
          <div className="flex items-center gap-2.5 px-4 py-3 bg-surface-2 border-b border-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1db954] animate-pulse2
              shadow-[0_0_8px_rgba(29,185,84,0.5)]" />
            <span className="font-mono text-xs text-muted">{active.name}</span>
          </div>
          <iframe
            key={active.id}
            src={`https://open.spotify.com/embed/playlist/${active.id}?utm_source=generator&theme=0`}
            width="100%"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block border-0"
          />
        </div>

        {/* Playlist list */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-accent tracking-widest">Playlists</span>
            <h2 className="font-display text-xl font-bold">所有歌單</h2>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="flex flex-col gap-2">
            {playlists.map((pl, i) => (
              <div
                key={pl.id}
                onClick={() => setActive(pl)}
                className={`flex items-center gap-4 rounded-lg px-5 py-4 cursor-pointer
                  border transition-all relative overflow-hidden
                  ${active.id === pl.id
                    ? 'border-[rgba(29,185,84,0.35)] bg-[rgba(29,185,84,0.05)]'
                    : 'border-subtle bg-surface hover:bg-surface-2 hover:border-white/15'}`}
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-0.5 transition-colors
                  ${active.id === pl.id ? 'bg-[#1db954]' : 'bg-transparent'}`} />

                <span className={`font-mono text-lg font-bold w-7 transition-colors
                  ${active.id === pl.id ? 'text-[#1db954]' : 'text-dim'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex-1">
                  <div className="font-display font-semibold text-sm">{pl.name}</div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={pl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="font-mono text-xs text-dim hover:text-[#1db954] transition-colors"
                  >
                    Spotify ↗
                  </a>
                  <div className={`w-7 h-7 rounded-full border flex items-center justify-center
                    font-mono text-xs transition-all
                    ${active.id === pl.id
                      ? 'border-[rgba(29,185,84,0.4)] text-[#1db954] bg-[rgba(29,185,84,0.15)]'
                      : 'border-subtle text-dim hover:border-[rgba(29,185,84,0.4)] hover:text-[#1db954]'}`}>
                    ▶
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tip */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg
          bg-accent/5 border border-accent/12 font-mono text-xs text-muted">
          <span>💡</span>
          歡迎推薦音樂給我！不論是 Spotify 歌單、YouTube 播放列表，或是任何你覺得值得分享的音樂資源，都非常歡迎。都可以聯繫我
        </div>
      </div>
    </div>
  )
}
