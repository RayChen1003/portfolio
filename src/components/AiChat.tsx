import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}


const SUGGESTIONS = [
  '你會哪些技術？',
  '介紹一下你的論文',
  '有什麼專案作品？',
  '電競經歷是什麼？',
]

export default function AiChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '嗨！我是 Ray 的 AI 助理，可以問我關於 Ray 的背景、技能或專案 👋' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open, messages])

  async function send(text?: string) {
    const userMsg = text ?? input.trim()
    if (!userMsg || loading) return
    setInput('')

    const newMessages: Message[] = [...messages, { role: 'user', content: userMsg }]
    setMessages(newMessages)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await res.json()
      const reply = data.content?.[0]?.text ?? '抱歉，無法取得回應'
      setMessages([...newMessages, { role: 'assistant', content: reply }])
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: '連線錯誤，請稍後再試' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Chat window */}
      <div className={`fixed bottom-24 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)]
        bg-[#0d1117] border border-white/10 rounded-2xl shadow-2xl
        flex flex-col overflow-hidden
        transition-all duration-300 ease-in-out origin-bottom-right
        ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
        style={{ height: '480px' }}>

        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8 bg-[#0d1117]">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30
              flex items-center justify-center font-mono text-xs text-accent font-bold">RC</div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400
              border-2 border-[#0d1117]" />
          </div>
          <div>
            <div className="font-mono text-xs text-white font-semibold">Ray's AI 助理</div>
            <div className="font-mono text-[10px] text-green-400">● 線上</div>
          </div>
          <button onClick={() => setOpen(false)}
            className="ml-auto text-muted hover:text-white transition-colors p-1">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-none">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] px-3 py-2 rounded-xl font-sans text-sm leading-relaxed
                ${m.role === 'user'
                  ? 'bg-accent text-bg rounded-br-sm'
                  : 'bg-white/6 text-white/90 rounded-bl-sm border border-white/8'}`}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/6 border border-white/8 px-4 py-3 rounded-xl rounded-bl-sm">
                <div className="flex gap-1.5 items-center">
                  {[0,1,2].map(i => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions (only shown on first message) */}
        {messages.length === 1 && (
          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {SUGGESTIONS.map(s => (
              <button key={s} onClick={() => send(s)}
                className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-accent/30
                  text-accent hover:bg-accent/10 transition-colors">
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="px-3 pb-3 pt-2 border-t border-white/8">
          <div className="flex gap-2 items-center bg-white/5 rounded-xl px-3 py-2 border border-white/8
            focus-within:border-accent/40 transition-colors">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="問我任何關於 Ray 的事..."
              className="flex-1 bg-transparent font-sans text-sm text-white placeholder:text-white/30
                outline-none min-w-0"
            />
            <button onClick={() => send()}
              disabled={!input.trim() || loading}
              className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center
                disabled:opacity-30 hover:bg-accent/80 transition-all flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-accent
          flex items-center justify-center shadow-lg shadow-accent/20
          hover:bg-accent/90 transition-all hover:scale-105 active:scale-95">
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400
          border-2 border-bg animate-pulse" />
      </button>
    </>
  )
}
