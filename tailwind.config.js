/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: '#0d3445',
        'primary-light': '#1a5978',
        'primary-dark': '#072736',
        // Define dark mode colors
        dark: '#121212',
        'dark-card': '#1e1e1e',
        'dark-primary': '#e1e1e1',
        'dark-secondary': '#a0a0a0',
        'dark-border': '#2a2a2a',
      },
    },
  },
  plugins: [],
};