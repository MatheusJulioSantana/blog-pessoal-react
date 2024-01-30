/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      Primary: '#1E1D39',
      Secundary:'#CCFFD0',
      },
    },
  },
  plugins: [],
};