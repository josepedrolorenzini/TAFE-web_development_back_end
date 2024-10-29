/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs',  // Scan all EJS templates in the 'views' folder
    './public/**/*.js'   // If you have JavaScript files in 'public'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

