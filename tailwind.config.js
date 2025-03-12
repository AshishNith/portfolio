/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(0, 0, 0, 0.3)',
          light: 'rgba(255, 255, 255, 0.2)',
        },
        primary: '#6D28D9',
        'primary-light': '#8B5CF6',
        'primary-dark': '#5B21B6',
        'primary-darker': '#4C1D95',
        accent: '#EC4899',
        dark: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          lighter: '#334155'
        },
        light: '#F8FAFC'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}