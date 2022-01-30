import Image from "next/image";
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Modal from "react-modal";
import { TemplateWrapper } from "@/components/organisms";

export default function Galeri() {
  const [modalGallery, showModalGallery] = useState(false);

  const images = [
    {
      original: "/templates/3/galeri/1.png",
      thumbnail: "/templates/3/galeri/1.png",
    },
    {
      original: "/templates/3/galeri/2.png",
      thumbnail: "/templates/3/galeri/2.png",
    },
    {
      original: "/templates/3/galeri/3.png",
      thumbnail: "/templates/3/galeri/3.png",
    },
    {
      original: "/templates/3/galeri/4.png",
      thumbnail: "/templates/3/galeri/4.png",
    },
    {
      original: "/templates/3/galeri/5.png",
      thumbnail: "/templates/3/galeri/5.png",
    },
  ];

  return (
    <TemplateWrapper backgroundImage="/templates/3/background/5.png">
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
        <h1 className="text-center font-segoe text-3xl">You & Me</h1>
      </div>
      <div className="content space-y-3">
        {images.map((item, index) => (
          <div
            key={index}
            className="rounded-xl w-72 h-72 cursor-pointer block mx-auto duration-300 transform hover:-translate-y-1 relative overflow-hidden"
          >
            <Image
              src={`${item.original}`}
              alt={`Galeri ${index + 1}`}
              layout="fill"
              objectFit="cover"
              onClick={() => showModalGallery(true)}
            />
          </div>
        ))}
      </div>
    </TemplateWrapper>
  );
}
