/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif:   ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
        hand:    ['Caveat', 'cursive'],
        mono:    ['JetBrains Mono', 'DM Mono', 'monospace'],
      },
      colors: {
        ivory:  '#FFF8ED',
        ink:    '#171923',
        cobalt: '#315CFF',
        coral:  '#FF684A',
        butter: '#FFD76A',
        lime:   '#D8F36A',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
};
