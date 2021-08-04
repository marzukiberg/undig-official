const colors = require('tailwindcss/colors')

let minus = [...Array(51).keys()].map((item) => -item);
let plus = [...Array(51).keys()];
let objMinus = {};
let objPlus = {};
let objZIndex = {};
minus.map((min) => (objMinus[min.toString()] = min));
plus.map((plus) => (objPlus[plus.toString()] = plus));
objZIndex = { ...objMinus, ...objPlus };

module.exports = {
  important: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: objZIndex,
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      pink: colors.pink,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
      green200: '#A9BFA0',
      green300: '#89A37F',
      green700: '#4E6E4E',
      indigo300: '#5C9FAB',
      indigo500: '#8296AE',
      indigo600: '#525C6B',
      indigo700: '#7D91A9',
      indigo900: '#465970'
    },
  },
  variants: {
    extend: {
      translateX: ['group-hover', 'group-focus'],
      translateY: ['group-hover', 'group-focus'],
      scale: ['group-hover', 'group-focus'],
      block: ['group-hover', 'group-focus'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
