/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fonts:[
        'PlayfairDisplay' ,['Playfair Display' , 'serif']
       ],
      colors:{
        skyblue: '#87CEEB',
      },
    },
  },
  plugins: [],
}
