import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SYSTEM_PROMPT = `你是 Ray Chen（陳睿為）的個人網站 AI 助理。用簡潔、自然的方式回答訪客關於 Ray 的問題。

## 關於 Ray Chen
- 全名：陳睿為 / Ray Chen
- 學歷：中原大學 智慧計算與大數據碩士（2023–2025）、資訊管理學系（2019–2023）
- Email：raychen02012@gmail.com
- 所在地：高雄，台灣
- GitHub：https://github.com/RayChen1003
- 目前狀態：積極求職中，目標系統工程師 / 軟體工程師

## 技術技能
- 語言：Python、Go、JavaScript、TypeScript、Shell/Bash
- 前端：React、Vite、Tailwind CSS
- 後端：Node.js、Express、REST API、PostgreSQL
- DevOps：Docker、Kubernetes、Helm、ArgoCD、Prometheus、Linux
- AI/ML：Expectimax、NumPy、Heuristic Search
- 工具：Git/GitHub、VS Code

## 專案
1. **2048 AI Engine**（碩士論文）：用 Expectimax 演算法搭配動態深度搜尋（3–6層），比固定深度快 75%，4096 tile 成功率 38%。Demo：raychen1003.github.io/2048-ai-demo
2. **御選精肉**：Next.js 14 肉品電商平台，含購物車、後台進銷存管理。Demo：meat-shop-iota.vercel.app
3. **Crypto Price Monitor**：Go 語言整合 CoinGecko API 的加密貨幣價格監控工具

## 電競經歷
- 遊戲：Rainbow Six Siege
- 年份：2019–2023
- 最後隊伍：Dire Wolves（代表台灣）
- 累計賽事收益：約 $23,842 USD
- Liquipedia：liquipedia.net/rainbowsix/Ray

## 回覆規則
- 繁體中文優先，訪客用英文就用英文回
- 回答簡潔，不超過 3–4 句
- 不知道的事不要編造
- 如果問到聯絡方式，提供 raychen02012@gmail.com`

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
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
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
