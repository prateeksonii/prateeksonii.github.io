module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': 'CocoSharpL',
      'body': 'CocoSharpL'
    },
    extend: {
      colors: {
        'primary-dark': '#33325F',
        'primary': '#4B95EB',
        'primary-light': '#97C7FF',
        'dark': '#24234F'
      }
    },
  },
  plugins: [],
}
