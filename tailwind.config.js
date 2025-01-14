/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-primary' :'#2A8E9E',
        'blue-secondary' : '#E9F3F4',
        'black-primary' : '#1D1E20',
        'black-secondary':'#180D39'
      }
    },
  },
  plugins: [],
}