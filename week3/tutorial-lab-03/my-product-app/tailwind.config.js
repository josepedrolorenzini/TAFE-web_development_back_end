/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#F1592A',
        secondary: '#F8312F',
        'light-gray': '#F9F9F9',
        'turquoise': 'darkturquoise'
      },
      spacing: {
        '50px': '25rem',
      },
      screens: {
        '600': { max: '600px' },
        '700': { max: '700px' },
        '800': { max: '800px' },
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}

