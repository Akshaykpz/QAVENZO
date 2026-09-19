/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E51920',
          'red-dark': '#B51117',
          'red-light': '#FF333D',
          yellow: '#FFD200',
          'yellow-light': '#FFE259',
          'yellow-dark': '#D9B200',
        },
        dark: {
          950: '#070709',
          900: '#0E0E12',
          850: '#14141A',
          800: '#1B1B24',
          700: '#2A2A38',
        }
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow-red': '0 0 35px -5px rgba(229, 25, 32, 0.4)',
        'glow-yellow': '0 0 35px -5px rgba(255, 210, 0, 0.35)',
        'comic': '4px 4px 0px 0px #000000',
        'comic-lg': '6px 6px 0px 0px #000000',
        'comic-red': '4px 4px 0px 0px #E51920',
        'comic-yellow': '4px 4px 0px 0px #FFD200',
      }
    },
  },
  plugins: [],
}
