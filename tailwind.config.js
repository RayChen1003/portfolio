/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Noto Sans TC"', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        bg: '#09090b',
        surface: '#111113',
        'surface-2': '#18181b',
        accent: '#d4aa3f',
        gold: '#d4aa3f',
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
        pulse2: 'pulse2 2s ease infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        ticker: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        pulse2: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.4 } },
        blink: { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } },
      },
    },
  },
  plugins: [],
}
