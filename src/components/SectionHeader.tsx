interface Props {
  num: string
  title: string
}

export default function SectionHeader({ num, title }: Props) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-mono text-xs text-accent tracking-widest">{num}</span>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-white">{title}</h2>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  )
}
