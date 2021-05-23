module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      mobile: '768px',
      laptop: '992px',
      desktop: '1200px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
