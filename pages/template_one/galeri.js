import React, { useEffect } from "react";
import { useState } from "react";
import { hidden, fadeIn, initSlideRight, slideRight } from "./animations";
import Modal from "react-modal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const animateGaleri = () => {
  initSlideRight(".galeri .title");
  hidden(".galeri .section_img");
  slideRight(".galeri .title", () => {
    fadeIn(".galeri .section_img");
  });
};
export default function Galeri() {
  useEffect(animateGaleri);
  const [modalGallery, showModalGallery] = useState(false);

  const images = [
    {
      original: "template_one/gallery-1.jpg",
      thumbnail: "template_one/gallery-1.jpg",
    },
    {
      original: "template_one/gallery-2.jfif",
      thumbnail: "template_one/gallery-2.jfif",
    },
    {
      original: "template_one/gallery-3.jfif",
      thumbnail: "template_one/gallery-3.jfif",
    },
    {
      original: "template_one/gallery-4.jfif",
      thumbnail: "template_one/gallery-4.jfif",
    },
    {
      original: "template_one/gallery-5.jfif",
      thumbnail: "template_one/gallery-5.jfif",
    },
  ];
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="with_scroll">
      <Modal
        isOpen={modalGallery}
        onRequestClose={() => showModalGallery(false)}
        style={customStyles}
        contentLabel="Modal Galeri"
      >
        <ImageGallery items={images} lazyLoad />
      </Modal>
      <section id="galeri" className="galeri with_frame pb-5">
        <div className="section_frame">
          <span className="title segoe-print mb-3">You & Me</span>
          <div className="section_img">
            {images.map((item, index) => (
              <img
                key={index}
                src={`${item.original}`}
                alt={`Galeri ${index + 1}`}
                className="img-fluid galeri_image mb-3"
                style={{ cursor: "pointer" }}
                onClick={() => showModalGallery(true)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
