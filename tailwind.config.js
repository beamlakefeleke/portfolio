/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink:     '#0F0F0F',   // near-true black bg — avoids deep-navy AI signature
        surface: '#1C1C1C',   // card/section surfaces
        paper:   '#F0EBE1',   // warm off-white — editorial, not cream
        amber:   '#C8A96E',   // gold accent — zero neon, zero AI
        muted:   '#5E5E5E',   // secondary text
        'light-surface': '#E8E3D8', // light mode card surface
        // legacy aliases kept for any leftover references — map to new tokens
        primary:      '#0F0F0F',
        secondary:    '#1C1C1C',
        accent:       '#C8A96E',
        'accent-pink':'#C8A96E',
        'text-muted': '#5E5E5E',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body:    ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
        // legacy alias
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee-scroll 25s linear infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
      },
      keyframes: {
        'marquee-scroll': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
