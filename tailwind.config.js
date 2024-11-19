/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        'calc-25-minus-20': 'calc(25% - 20px)',
      },
      colors: {
        primaryColor: '#1a3c2c',
        secondaryColor: '#45352b',
        thirdColor: '#807558',
        fourthColor: '#363123',
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
        md: '768px',
      },
    },
  },
  plugins: [],
};
