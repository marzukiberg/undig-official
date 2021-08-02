import $ from 'jquery';

const Animate = {
  fadeIn({ el, done }) {
    $(el)
      .css({
        opacity: 0,
      })
      .animate({ opacity: 1 }, 1000, done);
  },
};

export default Animate;
