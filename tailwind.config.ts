import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#963C1E',
          dark: '#7B3018',
          light: '#C4764A',
        },
        secondary: '#5A5A3C',
        'bg-page': '#FEFEFE',
        'bg-warm': '#FAF7F4',
        'bg-section': '#F5EFE9',
        'fg-muted': '#878769',
        'fg-subtle': '#A5A596',
        'ui-border': '#E8DDD4',
        'ui-floral': '#E8D5C4',
        whatsapp: '#25D366',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
