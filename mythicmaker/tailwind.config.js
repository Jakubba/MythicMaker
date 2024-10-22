/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#eeac89',
        secondaryColor: '#b0585d',
        thirdColor: '#9b3063',
        fourthColor: '#691e3b',
      },
      fontFamily: {
        primaryFont: ['Cinzel Decorative', 'serif'],
        secondaryFont: ['Open Sans', 'sans-serif'],
        tertiaryFont: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        bgHome: "url('/src/assets/image/background-home.png')",
      },
      screens: {
        'md': '768px',
      },
    },
  },
  plugins: [],
};
