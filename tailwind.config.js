module.exports = {
  content: [
    './*.{html,js}',
    './components/**/*.{html,js}'
],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
