module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '350px',
        'xxs': '270px',
      },
      colors: {
        'primary-blue': '#334275',
        'video-blue': '#A6BAFF',
      },
      backgroundImage: {
      },
      boxShadow: {
        'spray-effect': '-20px 20px 15px 5px #40518D;',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}