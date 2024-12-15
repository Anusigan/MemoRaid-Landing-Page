/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0d3445',
          light: '#1a4d64',
          dark: '#082736',
        },
      },
    },
  },
  plugins: [],
};