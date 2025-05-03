/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          light: '#112240',
          DEFAULT: '#0a192f',
          dark: '#020c1b',
        },
        slate: {
          light: '#ccd6f6',
          DEFAULT: '#8892b0',
          dark: '#495670',
        },
        teal: {
          DEFAULT: '#64ffda',
        },
        accent: '#FD2155',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'monospace'],
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1024px',
        lg: '1280px',
        xl: '1536px',
      },
      animation: {
        fade: 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};