import $ from "jquery";

export const initPopup = (el, callback = () => {}) => {
  $(el).css({ position: "relative", transform: "scale(0)" }, callback);
};
export const showPopup = (el, callback = () => {}) => {
  $(el).css({ transition: "0.3s", transform: "scale(1)" });
  callback();
};
export const hidden = (el, callback = () => {}) => {
  $(el).css({ opacity: 0 });
  callback();
};
export const fadeIn = (el, callback = () => {}) => {
  $(el).animate({ opacity: 1 }, 1200, callback);
};
export const initSlideLeft = (el, left = "100%") => {
  $(el).css({ position: "relative", left });
};
export const slideLeft = (el, callback = () => {}, left = 0) => {
  $(el).animate({ left }, 1200, callback);
};
export const initSlideRight = (el, right = "100%") => {
  $(el).css({ position: "relative", right });
};
export const slideRight = (el, callback = () => {}, right = 0) => {
  $(el).animate({ right }, 1200, callback);
};
export const initSlideTop = (el, top = "100%") => {
  $(el).css({ position: "relative", top });
};
export const slideTop = (el, callback = () => {}, top = 0) => {
  $(el).animate({ top }, 1200, callback);
};
export const slideDown = (el, callback = () => {}, top = 0) => {
  $(el).animate({ position: "relative", top: top }, 1200, callback);
};

const Animations = () => {
  return <div></div>;
};
export default Animations;
