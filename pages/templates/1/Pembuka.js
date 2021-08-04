import { motion, MotionConfig } from 'framer-motion';
import React from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import ContainerTemplate from '../../components/ContainerTemplate';
import { fadeIn } from '../../utils/Constants';

export default function Pembuka({ setpageindex, toggleAudio }) {
  const bukaUndangan = () => {
    toggleAudio();
    setpageindex(1);
  };

  return (
    <MotionConfig>
      <motion.section
        id="pembuka"
        className="relative"
        variants={fadeIn}
        initial="hide"
        animate="show"
      >
        <BackgroundImage
          src="/templates/1/background/1.png"
          className="object-right"
          noOverlay
        />

        <ContainerTemplate noFrame>
          <motion.h1
            className="text-center font-salsa text-2xl text-pink-500"
            variants={fadeIn}
          >
            The Wedding Of
          </motion.h1>

          <motion.div
            className="content__names-holder relative text-center"
            variants={fadeIn}
          >
            <img
              src="/templates/1/embel/frame-nama.png"
              alt="Frame Nama"
              className="content__names-background h-full block mx-auto object-contain"
            />
            <div className="content__names text-center w-full text-4xl text-pink-500 absolute top-1/2 left-0 transform -translate-y-1/2 font-salsa font-bold">
              <div className="">Raihan</div>
              <div className="">&</div>
              <div className="">Rahma</div>
            </div>
          </motion.div>

          <div className="content__belongs font-roboto space-y-3">
            <div>
              <motion.span variants={fadeIn} className="text-sm font-segoe">
                Kepada Yth:
              </motion.span>
              <motion.span variants={fadeIn} className="block mb-3 font-bold">
                Alumni SIF
              </motion.span>
            </div>
            <motion.img
              variants={fadeIn}
              src="/templates/1/embel/underline-nama.png"
              alt="Underline"
              className="w-1/2 object-contain block mx-auto mb-6"
            />
            <motion.button
              variants={fadeIn}
              className="rounded-full py-2 px-6 bg-pink-200 border text-pink-500 border-pink-500 font-salsa shadow-xl duration-300  hover:bg-pink-500 hover:text-white"
              onClick={bukaUndangan}
            >
              Buka Undangan
            </motion.button>
          </div>
        </ContainerTemplate>
      </motion.section>
    </MotionConfig>
  );
}
