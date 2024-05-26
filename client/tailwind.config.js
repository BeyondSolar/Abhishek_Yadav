/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'saira' : ['Saira Extra Condensed', 'Roboto']
      },
      fontSize: {
        'dynamic': 'calc(1.5rem + 5vw)',
        'dynamic-100' : '1.5rem',
        'superheading' : '3.5rem',
        'heading' : '2rem',
        'subheading' : '1.5rem',
        'content' : '1rem',
      },
      colors: {
        'theme' : '#633e21',
        'light-theme' : '#89552d',
        'custom-gray': '#343a40',
        'light-gray' : '#6c757d',
      },
    },
  },
  plugins: [],
}
