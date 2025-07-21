/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'croptech-primary': '#377138',
        'croptech-secondary': '#234723',
        'croptech-bg': '#F8F8F6',
        'croptech-dark-bg': '#1F2B20',
      },
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
