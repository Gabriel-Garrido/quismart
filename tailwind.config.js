/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a1a',
        'dark-secondary': '#262626',
        'primary-blue': '#00B4D8',
        'secondary-green': '#00FF94',
        'light-text': '#FFFFFF',
        'secondary-text': '#B3B3B3',
        'highlight': '#FFD700',
      },
    },
  },
  plugins: [],
}