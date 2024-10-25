/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },

      colors: {
        'primary': '#7065F0',
        'secondary': '#100A55',
        'quaternary': '#000929',
        'tertiary': '#E0DEF7',
        'background': '#F7F7FD'
    },
    spacing: {
      sectionTopMargin: '5rem',
      sectionMarginX: '3rem',
      sectionPaddingX: '4rem',
      sectionPaddingY: '4rem',
    }
  },
  plugins: [],
}
}