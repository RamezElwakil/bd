/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          25: '#fef7fb',
          50: '#fdf2f8',
          100: '#fce7f3',
          150: '#fbddf0',
          200: '#fbcfe8',
          250: '#fac5e2',
          300: '#f9a8d4',
          350: '#f79ecf',
          400: '#f472b6',
          450: '#f268b0',
          500: '#ec4899',
          550: '#ea3e93',
          600: '#db2777',
          650: '#d91d71',
          700: '#be185d',
          750: '#bc0e57',
          800: '#9d174d',
          850: '#9b0d47',
          900: '#831843',
          950: '#810d3d',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        fuchsia: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        violet: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        yellow: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        }
      },
      fontFamily: {
        'handwriting': ['Caveat', 'cursive'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 25s ease infinite',
        'colorShift': 'colorShift 12s ease infinite',
        'float-1': 'float 8s ease-in-out infinite',
        'float-2': 'float 10s ease-in-out infinite',
        'float-3': 'float 12s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '300% 300%',
            'background-position': '0% 50%'
          },
          '25%': {
            'background-size': '300% 300%',
            'background-position': '100% 50%'
          },
          '50%': {
            'background-size': '300% 300%',
            'background-position': '100% 100%'
          },
          '75%': {
            'background-size': '300% 300%',
            'background-position': '0% 100%'
          },
        },
        colorShift: {
          '0%': {
            'background': 'linear-gradient(-45deg, #ffffff, #fdf2f8, #fce7f3, #fbcfe8, #f9a8d4, #f472b6, #ffffff, #fce7f3, #fdf2f8, #ffffff)'
          },
          '12.5%': {
            'background': 'linear-gradient(-45deg, #fdf2f8, #fce7f3, #fbcfe8, #f9a8d4, #f472b6, #ec4899, #fdf2f8, #fbcfe8, #fce7f3, #fdf2f8)'
          },
          '25%': {
            'background': 'linear-gradient(-45deg, #fce7f3, #fbcfe8, #f9a8d4, #f472b6, #ec4899, #db2777, #fce7f3, #f9a8d4, #fbcfe8, #fce7f3)'
          },
          '37.5%': {
            'background': 'linear-gradient(-45deg, #fbcfe8, #f9a8d4, #f472b6, #ec4899, #db2777, #be185d, #fbcfe8, #f472b6, #f9a8d4, #fbcfe8)'
          },
          '50%': {
            'background': 'linear-gradient(-45deg, #f9a8d4, #f472b6, #ec4899, #db2777, #be185d, #9d174d, #f9a8d4, #ec4899, #f472b6, #f9a8d4)'
          },
          '62.5%': {
            'background': 'linear-gradient(-45deg, #f472b6, #ec4899, #db2777, #be185d, #9d174d, #831843, #f472b6, #db2777, #ec4899, #f472b6)'
          },
          '75%': {
            'background': 'linear-gradient(-45deg, #ec4899, #db2777, #be185d, #9d174d, #831843, #ffffff, #ec4899, #be185d, #db2777, #ec4899)'
          },
          '87.5%': {
            'background': 'linear-gradient(-45deg, #db2777, #be185d, #9d174d, #831843, #ffffff, #fdf2f8, #db2777, #9d174d, #be185d, #db2777)'
          },
          '100%': {
            'background': 'linear-gradient(-45deg, #ffffff, #fdf2f8, #fce7f3, #fbcfe8, #f9a8d4, #f472b6, #ffffff, #fce7f3, #fdf2f8, #ffffff)'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
} 