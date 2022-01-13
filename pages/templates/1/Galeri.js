import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Modal from 'react-modal';
import BackgroundImage from '../../components/BackgroundImage';
import ContainerTemplate from '../../components/ContainerTemplate';
import { fadeIn, fadeInUp } from '../../utils/Constants';

export default function Galeri() {
  const [modalGallery, showModalGallery] = useState(false);

  const images = [
    {
      original: '/templates/1/galeri/1.png',
      thumbnail: '/templates/1/galeri/1.png',
    },
    {
      original: '/templates/1/galeri/2.png',
      thumbnail: '/templates/1/galeri/2.png',
    },
    {
      original: '/templates/1/galeri/3.png',
      thumbnail: '/templates/1/galeri/3.png',
    },
    {
      original: '/templates/1/galeri/4.png',
      thumbnail: '/templates/1/galeri/4.png',
    },
    {
      original: '/templates/1/galeri/5.png',
      thumbnail: '/templates/1/galeri/5.png',
    },
  ];

  return (
    <>
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
      <motion.section
        variants={fadeIn}
        initial="hide"
        animate="show"
        id="galeri"
        className="galeri relative"
      >
        <BackgroundImage noOverlay src="/templates/1/background/5.png" />

        <ContainerTemplate>
          <div className="header text-center font-quicksand space-y-3">
            <motion.h1
              variants={fadeInUp}
              className="text-center font-segoe text-3xl text-white"
            >
              You & Me
            </motion.h1>
          </div>
          <motion.div variants={fadeIn} className="content space-y-3">
            {images.map((item, index) => (
              <img
                key={index}
                src={`${item.original}`}
                alt={`Galeri ${index + 1}`}
                className="rounded-xl w-72 h-72 object-cover cursor-pointer block mx-auto duration-300 transform hover:-translate-y-1"
                onClick={() => showModalGallery(true)}
              />
            ))}
          </motion.div>
        </ContainerTemplate>
      </motion.section>
    </>
  );
}
