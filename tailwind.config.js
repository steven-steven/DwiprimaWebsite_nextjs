module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('/img/main-bg.png')",
        'main-blasting-img': "/img/blast1.png",
        "vid-preview": "url('/img/vid_preview.gif')",
      },
      boxShadow: {
        'spray-effect': '-20px 20px 15px 5px #334275;',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}