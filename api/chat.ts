import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { messages } = req.body

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY ?? '',
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: `你是 Ray Chen（陳睿為）的個人網站 AI 助理。用簡潔、自然的方式回答訪客關於 Ray 的問題。

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
1. 2048 AI Engine（碩士論文）：Expectimax 動態深度搜尋（3–6層），比固定深度快 75%，4096 tile 成功率 38%。Demo：raychen1003.github.io/2048-ai-demo
2. 御選精肉：Next.js 14 肉品電商平台，含購物車、後台進銷存。Demo：meat-shop-iota.vercel.app
3. Crypto Price Monitor：Go 語言整合 CoinGecko API

## 電競經歷
- 遊戲：Rainbow Six Siege，2019–2023
- 最後隊伍：Dire Wolves（代表台灣）
- 累計賽事收益：約 $23,842 USD

## 回覆規則
- 繁體中文優先，訪客用英文就用英文回
- 回答簡潔，不超過 3–4 句
- 不知道的事不要編造
- 聯絡方式：raychen02012@gmail.com`,
      messages,
    }),
  })

  const data = await response.json()
  res.status(200).json(data)
}
