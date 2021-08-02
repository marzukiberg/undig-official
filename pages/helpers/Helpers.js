const Helpers = {
  detectScrollDirection() {
    var lastScrollTop = 0;

    window.addEventListener(
      'scroll',
      function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          // downscroll code
          return 'down';
        } else {
          return 'up';
          // upscroll code
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      },
      false
    );
  },
};

export default Helpers;
