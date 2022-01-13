import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/Constants';

const BottomLink = ({
  href = '#',
  onClick = () => console.log('link'),
  className = '',
  img,
}) => {
  return (
    <motion.a
      variants={fadeIn}
      href="#"
      onClick={onClick}
      className={`flex-grow h-12 flex items-center justify-center duration-300 hover:bg-blue-500 hover:bg-opacity-50 ${className}`}
    >
      <img src={`/templates/1/${img}`} alt="Footer Icon" />
    </motion.a>
  );
};

export default function Footer({ pageindex, setpageindex }) {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hide"
      animate="show"
      id="template-one"
      className="flex fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm mx-auto z-50 "
      style={{
        boxShadow: 'inset 4px 0 4px rgba(0,0,0,0.5)',
      }}
    >
      <BottomLink
        href="#"
        onClick={() => setpageindex(1)}
        className={pageindex === 1 && 'bg-blue-500 bg-opacity-50'}
        img="icon-mempelai.svg"
      />
      <BottomLink
        href="#"
        onClick={() => setpageindex(2)}
        className={pageindex === 2 && 'bg-blue-500 bg-opacity-50'}
        img="icon-acara.svg"
      />
      <BottomLink
        href="#"
        onClick={() => setpageindex(3)}
        className={pageindex === 3 && 'bg-blue-500 bg-opacity-50'}
        img="icon-love-story.svg"
      />
      <BottomLink
        href="#"
        onClick={() => setpageindex(4)}
        className={pageindex === 4 && 'bg-blue-500 bg-opacity-50'}
        img="icon-galeri.svg"
      />
      <BottomLink
        href="#"
        onClick={() => setpageindex(5)}
        className={pageindex === 5 && 'bg-blue-500 bg-opacity-50'}
        img="icon-peta.svg"
      />
      <BottomLink
        href="#"
        onClick={() => setpageindex(6)}
        className={pageindex === 6 && 'bg-blue-500 bg-opacity-50'}
        img="icon-penutup.svg"
      />
    </motion.footer>
  );
}
