import { motion } from 'framer-motion';
import React from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import ContainerTemplate from '../../components/ContainerTemplate';
import { fadeIn, slideLeft, slideRight } from '../../utils/Constants';

export default function Mempelai() {
  return (
    <motion.section
      variants={fadeIn}
      initial="hide"
      animate="show"
      id="mempelai"
      className="relative"
    >
      <BackgroundImage src="/templates/2/background/2.png" />

      <ContainerTemplate>
        <motion.div
          className="header font-roboto space-y-3 text-sm"
          variants={fadeIn}
        >
          <motion.img
            variants={fadeIn}
            src="/templates/2/embel/bismillah.png"
            alt="Bismillah"
            className="w-1/2 block mx-auto"
          />
          <motion.p variants={fadeIn}>
            <i>Assalamu’alikum Warahmatullahi Wabaraktuh</i>
            <br />
            Dengan memohon Rahmat dan Ridho Allah SWT, Mohon do’a restu
            Bapak/Ibu/Saudara dalam rangka melangsungkan pernikahan putra putri
            kami:
          </motion.p>
        </motion.div>

        <div className="content space-y-6">
          <motion.div
            variants={slideRight}
            className="flex gap-x-3 rounded-xl  bg-white shadow-lg border group"
          >
            <div>
              <img
                src="/templates/2/mempelai/pria.png"
                className="w-32 h-full rounded-xl shadow-lg
                transform group-hover:-translate-y-3 duration-300"
              />
            </div>
            <div className="text-center space-y-3 p-3 flex-grow">
              <h2 className="text-xl text-yellow-400 font-salsa">
                Raihan bin Alfajri
              </h2>
              <img
                src="/templates/2/embel/underline-nama-mempelai.png"
                className="underline w-full"
              />
              <div className="space-y-0 font-quicksand">
                <p className="font-bold">Putra Pertama</p>
                <p>Bapak Alfajri</p>
                <p>Ibu Fitri Ramadhani</p>
              </div>
            </div>
            <div className="clear-both"></div>
          </motion.div>

          <motion.div
            variants={slideLeft}
            className="gap-x-3 rounded-xl flex  bg-white shadow-lg border group"
          >
            <div className="text-center space-y-3 p-3">
              <h2 className="text-xl text-yellow-400 font-salsa">
                Rahma binti Abdullah
              </h2>
              <img
                src="/templates/2/embel/underline-nama-mempelai.png"
                className="underline w-full"
              />
              <div className="space-y-0 font-quicksand">
                <p className="font-bold">Putri Kedua</p>
                <p>Bapak Abdullah</p>
              </div>
            </div>
            <div>
              <img
                src="/templates/2/mempelai/wanita.png"
                className="w-32 h-full rounded-xl shadow-lg transform group-hover:-translate-y-3 duration-300"
              />
            </div>
          </motion.div>
        </div>
      </ContainerTemplate>
    </motion.section>
  );
}
