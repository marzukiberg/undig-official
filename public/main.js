window.addEventListener('load', () => {
  new WOW().init();

  const Animate = {
    init() {
      const btns = document.querySelectorAll('button');
      btns.forEach((btn) => {
        btn.classList.add('wow fadeIn');
      });
    },
  };

  Animate.init();
});
