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
