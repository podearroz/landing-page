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
        secondary: '#1E1A14',
        'bg-page': '#EDE0D0',
        'bg-warm': '#E5D5C2',
        'bg-section': '#D9C9B3',
        'fg-muted': '#5C5040',
        'fg-subtle': '#7A6E60',
        'ui-border': '#E8DDD4',
        'ui-floral': '#E8D5C4',
        whatsapp: '#25D366',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
