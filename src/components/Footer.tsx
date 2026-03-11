import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-subtle py-6 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-mono text-accent">[RC]</span>
          <span className="font-mono text-xs text-dim">© 2025 Ray Chen</span>
        </div>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-dim hover:text-accent transition-colors">GitHub</a>
          <a href={profile.liquipedia} target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-dim hover:text-accent transition-colors">Liquipedia</a>
          <a href={`mailto:${profile.email}`}
            className="font-mono text-xs text-dim hover:text-accent transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}
