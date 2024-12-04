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
        customGradient:
          'linear-gradient(90deg, rgba(8,32,62,1) 3%, rgba(85,124,147,1) 21%, rgba(85,124,147,1) 80%, rgba(8,32,62,1) 97%)',
        cardGradient:
          'linear-gradient(180deg, rgba(8,32,62,1) 3%, rgba(54,87,113,1) 14%, rgba(101,130,154,1) 29%, rgba(119,147,170,1) 46%, rgba(110,138,162,1) 63%, rgba(53,85,111,1) 88%, rgba(8,32,62,1) 97%)',
      },
      screens: {
        md: '768px',
      },
    },
  },
  plugins: [],
};
