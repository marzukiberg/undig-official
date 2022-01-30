import Image from "next/image";
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Modal from "react-modal";
import { TemplateWrapper } from "@/components/organisms";

const images = [
  {
    original: "/templates/1/galeri/1.png",
    thumbnail: "/templates/1/galeri/1.png",
  },
  {
    original: "/templates/1/galeri/2.png",
    thumbnail: "/templates/1/galeri/2.png",
  },
  {
    original: "/templates/1/galeri/3.png",
    thumbnail: "/templates/1/galeri/3.png",
  },
  {
    original: "/templates/1/galeri/4.png",
    thumbnail: "/templates/1/galeri/4.png",
  },
  {
    original: "/templates/1/galeri/5.png",
    thumbnail: "/templates/1/galeri/5.png",
  },
];

export default function Galeri() {
  const [modalGallery, showModalGallery] = useState(false);

  return (
    <TemplateWrapper backgroundImage="/templates/1/background/5.png" noOverlay>
      <Modal
        isOpen={modalGallery}
        onRequestClose={() => showModalGallery(false)}
        className="max-w-sm mx-auto h-screen table"
        contentLabel="Modal Galeri"
      >
        <div className="table-cell align-middle max-w-sm bg-white bg-opacity-50">
          <ImageGallery items={images} lazyLoad />
        </div>
      </Modal>
      <div className="header text-center font-quicksand space-y-3">
        <h1 className="text-center font-segoe text-3xl text-white">You & Me</h1>
      </div>
      <div className="content space-y-3">
        {images.map((item, index) => (
          <div
            className="rounded-xl w-72 h-72 object-cover cursor-pointer block mx-auto overflow-hidden duration-300 transform hover:-translate-y-1"
            key={index}
          >
            <Image
              layout="fill"
              key={index}
              src={`${item.original}`}
              alt={`Galeri ${index + 1}`}
              onClick={() => showModalGallery(true)}
            />
          </div>
        ))}
      </div>
    </TemplateWrapper>
  );
}
