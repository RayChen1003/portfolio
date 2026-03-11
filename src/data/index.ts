export const profile = {
  nameEn: 'Ray Chen',
  nameZh: '陳睿為',
  tagline: 'Software Engineer',
  roles: ['Software Engineer', 'AI Researcher', 'DevOps Engineer', 'Full Stack Developer', 'Ex-Pro Gamer'],
  bio: [
    '中原大學智慧計算與大數據碩士畢業，在學期間專注於人工智慧與演算法相關研究。',
    '碩士論文以 2048 遊戲 AI 為題，利用 Expectimax 演算法搭配動態深度搜尋策略，達成比固定深度快 75% 的運算效能，並取得 38% 的 4096 tile 成功率。',
    '前職業 Rainbow Six Siege 選手，2019–2023 代表台灣出賽，培養了高壓環境快速決策與跨國團隊協作能力。',
    '目前積極求職，目標為系統工程師或軟體工程師，特別有興趣加入有國際視野的科技公司。',
  ],
  location: 'Kaohsiung, Taiwan',
  education: 'M.S. AI & Big Data',
  university: '中原大學 CYCU',
  gradYear: 2025,
  github: 'https://github.com/RayChen1003',
  liquipedia: 'https://liquipedia.net/rainbowsix/Ray',
  email: 'raychen02012@gmail.com',
  status: 'Open to Work',
}

export const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', level: 'top' },
      { name: 'Go', level: 'top' },
      { name: 'JavaScript', level: 'top' },
      { name: 'TypeScript', level: 'mid' },
      { name: 'Shell / Bash', level: 'mid' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 'top' },
      { name: 'Vite', level: 'top' },
      { name: 'Tailwind CSS', level: 'mid' },
      { name: 'HTML5 / CSS3', level: 'mid' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 'top' },
      { name: 'Express', level: 'top' },
      { name: 'REST API', level: 'mid' },
      { name: 'PostgreSQL', level: 'mid' },
    ],
  },
  {
    category: 'DevOps & Infra',
    items: [
      { name: 'Docker', level: 'top' },
      { name: 'Kubernetes', level: 'top' },
      { name: 'Helm', level: 'mid' },
      { name: 'ArgoCD', level: 'mid' },
      { name: 'Prometheus', level: 'mid' },
      { name: 'Linux', level: 'top' },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'NumPy', level: 'top' },
      { name: 'Expectimax', level: 'top' },
      { name: 'Heuristic Search', level: 'mid' },
      { name: 'Game AI', level: 'mid' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git / GitHub', level: 'top' },
      { name: 'VS Code', level: 'mid' },
      { name: 'PyInstaller', level: 'mid' },
    ],
  },
]

export const timeline = [
  {
    period: '2023 – 2025',
    title: '碩士研究生',
    place: '中原大學 — 智慧計算與大數據',
    desc: '論文：2048 遊戲 AI，Expectimax 動態深度搜尋策略',
    accent: false,
  },
  {
    period: '2019 – 2023',
    title: '職業電競選手',
    place: 'Rainbow Six Siege — Dire Wolves & 其他隊伍',
    desc: '代表台灣出賽，累積賽事收益超過 $23,000 USD',
    accent: true,
  },
  {
    period: '2019 – 2023',
    title: '大學畢業',
    place: '中原大學 — 資訊管理',
    desc: '累積系統管理、程式設計基礎、商業邏輯',
    accent: false,
  },
]

export const projects = [
  {
    id: '2048-ai',
    title: '2048 AI Engine',
    tag: 'AI / 論文',
    featured: true,
    desc: 'Expectimax 演算法搭配動態深度搜尋策略（3–6層），相較固定深度 5 達成 75% 運算速度提升，4096 tile 成功率達 38%。',
    longDesc: '平滑度懲罰（Smoothness Penalty）被識別為最關鍵的評估因子，Python/NumPy 核心算法並移植至 JavaScript 作為網頁 Demo。',
    tech: ['Python', 'NumPy', 'JavaScript', 'Expectimax', 'Heuristic AI'],
    metrics: [
      { val: '75%', label: '速度提升' },
      { val: '38%', label: '4096 成功率' },
      { val: '3–6', label: '動態深度' },
    ],
    demo: 'https://raychen1003.github.io/2048-ai-demo',
    github: 'https://github.com/RayChen1003/2048-ai-demo',
  },
  {
    id: 'meat-shop',
    title: '御選精肉',
    tag: 'Full Stack / E-commerce',
    featured: false,
    desc: '肉品電商平台，含前台購物車結帳流程與後台進銷存管理、商品管理、訂單管理系統',
    tech: ['Next.js 14', 'Tailwind CSS', 'Vercel'],
    demo: 'https://meat-shop-iota.vercel.app',
    github: 'https://github.com/RayChen1003/meat-shop',
  },
  {
    id: 'crypto-monitor',
    title: 'Crypto Price Monitor',
    tag: 'Go / API',
    featured: false,
    desc: '整合 CoinGecko API 的加密貨幣價格監控工具，以 Go 語言開發',
    tech: ['Go', 'CoinGecko API', 'REST'],
    github: 'https://github.com/RayChen1003/crypto-monitor',
  },
]

export const techStrip = [
  'Python', 'Go', 'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Docker', 'Kubernetes', 'Linux', 'Git', 'Helm', 'ArgoCD',
  'Prometheus', 'NumPy', 'Vite', 'Tailwind',
]

export const playlists = [
  { id: '1HOXqx8VLP9MdVqeE3MfcR', name: '李宗盛', url: 'https://open.spotify.com/playlist/1HOXqx8VLP9MdVqeE3MfcR' },
  { id: '6d6CGpatiOzY9nuPJ2pMw6', name: 'ZUTOMAYO', url: 'https://open.spotify.com/playlist/6d6CGpatiOzY9nuPJ2pMw6' },
  { id: '40YKsBZDWdYqmXkl7HpWcX', name: '日文合輯', url: 'https://open.spotify.com/playlist/40YKsBZDWdYqmXkl7HpWcX' },
  { id: '1FYbHkEiWTd5QAjbYzfbTo', name: 'Yorushika', url: 'https://open.spotify.com/playlist/1FYbHkEiWTd5QAjbYzfbTo' },
  { id: '4ghfpXc7TKfaysza3ws586', name: 'Hyukoh', url: 'https://open.spotify.com/playlist/4ghfpXc7TKfaysza3ws586' },
]

export const esportsCareer = {
  years: '2019 – 2023',
  lastTeam: 'Dire Wolves',
  game: 'Rainbow Six Siege',
  country: '🇹🇼 Taiwan',
  totalEarnings: '$23,842',
  liquipedia: 'https://liquipedia.net/rainbowsix/Ray',
  yearlyEarnings: [
    { year: '2019', amount: 65, pct: 0.6 },
    { year: '2020', amount: 5939, pct: 56 },
    { year: '2021', amount: 5323, pct: 50 },
    { year: '2022', amount: 915, pct: 8.6 },
    { year: '2023', amount: 10600, pct: 100 },
  ],
  transferableSkills: [
    { icon: '⚡', title: '快速決策', desc: '電競高壓環境要求毫秒級判斷，培養在不確定情況下快速分析與執行的能力' },
    { icon: '🌐', title: '跨國團隊協作', desc: '與亞太地區不同國籍隊友合作，具備英語溝通與跨文化協作經驗' },
    { icon: '📊', title: '數據分析思維', desc: '分析對手策略、個人數據與比賽影像，建立系統化的問題拆解能力' },
    { icon: '🎯', title: '高壓執行力', desc: '在觀眾與排名壓力下穩定發揮，具備在截止日期與高期待下保持品質的韌性' },
  ],
}
