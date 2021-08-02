const fadeIn = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};
const fadeInUp = {
  hide: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};

const slideRight = {
  hide: { x: '-100%' },
  show: {
    x: 0,
    transition: {
      duration: 0.4,
      delayChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};
const slideLeft = {
  hide: { x: '100%' },
  show: {
    x: 0,
    transition: {
      duration: 0.4,
      delayChildren: 1,
      staggerChildren: 0.4,
    },
  },
};

export { fadeIn, slideRight, slideLeft, fadeInUp };
