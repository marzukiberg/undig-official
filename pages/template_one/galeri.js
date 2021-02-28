import React, { useEffect } from "react";
import { hidden, fadeIn, initSlideRight, slideRight } from "./animations";
export const animateGaleri = () => {
  initSlideRight(".galeri .title");
  hidden(".galeri .section_img");
  slideRight(".galeri .title", () => {
    fadeIn(".galeri .section_img");
  });
};
export default function Galeri() {
  useEffect(animateGaleri);
  const images = [
    { src: "gallery-1.jpg" },
    { src: "gallery-2.jfif" },
    { src: "gallery-3.jfif" },
    { src: "gallery-4.jfif" },
    { src: "gallery-5.jfif" },
  ];
  return (
    <div className="with_scroll">
      <section id="galeri" className="galeri with_frame pb-5">
        <div className="section_frame">
          <span className="title segoe-print mb-3">You & Me</span>
          <div className="section_img">
            {images.map((item, index) => (
              <img
                key={index}
                src={`template_one/${item.src}`}
                alt={`Galeri ${index + 1}`}
                className="img-fluid galeri_image mb-3"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
