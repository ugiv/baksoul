/** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '300': '18.75rem',
        '800': '50rem',
        '900': '56.25rem',
        '950': '59.375rem',
        '1000': '62.5rem',
        '1050': '65.625rem',
        '1100': '68.75rem'
      },
      minHeight: {
        '750': '750px'
      }
    },
  },
  variants: {},
  plugins: [],
}