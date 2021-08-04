import { motion } from 'framer-motion';
import React from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import ContainerTemplate from '../../components/ContainerTemplate';
import { fadeIn, slideLeft, slideRight } from '../../utils/Constants';

export default function LoveStory() {
  return (
    <motion.section
      variants={fadeIn}
      initial="hide"
      animate="show"
      id="love_story"
      className="love_story relative"
    >
      <BackgroundImage src="/templates/1/background/4.png" />

      <ContainerTemplate>
        <div className="header text-center font-roboto space-y-3 text-sm">
          <motion.h1
            variants={fadeIn}
            className="text-center font-segoe text-white text-3xl"
          >
            Love Story
          </motion.h1>
          <motion.img
            variants={fadeIn}
            src="/templates/1/embel/underline-3.png"
            alt="Underline 3"
            className="w-1/2 block mx-auto"
          />
          <motion.p variants={fadeIn}>
            “Dan diantara tanda-tanda kekuasaan-Nya ialah Dia Menciptakan
            untukmu istri-istri, supaya kamu cenderung dan merasa tentram
            kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.
            Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
            bagi kaum yang berpikir.” <br />
            <strong className="d-block text-center">Q.S. Ar-Rum : 21</strong>
          </motion.p>
        </div>

        <motion.div variants={fadeIn} className="content">
          <div className="space-y-0">
            <div className="grid grid-cols-2 relative gap-x-3">
              <motion.div
                variants={slideRight}
                className="col-span-1"
                style={{
                  paddingBottom: '100%',
                }}
              >
                <div className="bg-white py-6 px-3 w-full shadow-lg space-y-1 font-roboto box-border">
                  <h2 className="font-poppins font-bold">2018</h2>
                  <p className="text-xs">
                    Kami pertama kali bertemu satu sama lain di sebuah acara
                    perminatan di kampus. Kami berkenalan menjadi perwakilan
                    dari masing-masing divisi.
                  </p>
                </div>
              </motion.div>

              <div className="absolute h-full w-1 bg-gray-700 rounded-t-full left-1/2 transform -translate-x-1/2 z-10">
                <div className="absolute w-4 h-12 rounded-full bg-pink-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              <motion.div
                variants={slideLeft}
                className="col-span-1"
                style={{
                  paddingTop: '100%',
                }}
              >
                <div className="bg-white py-6 px-3 w-full shadow-lg space-y-1 font-roboto box-border">
                  <h2 className="font-poppins font-bold">2020</h2>
                  <p className="text-xs">
                    Setelah sekian lama tidak bertemu, kami bertemu kembali di
                    suatu kegiatan sosial. Kebetulan kami berada dalam lembaga
                    yang sama.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="grid grid-cols-2 relative gap-x-3">
              <motion.div
                variants={slideRight}
                style={{
                  paddingBottom: '100%',
                }}
              >
                <div className="bg-white py-6 px-3 w-full shadow-lg space-y-1 font-roboto box-border">
                  <h2 className="font-poppins font-bold">2019</h2>
                  <p className="text-xs">
                    Salah satu momen yang tidak diduga-duga, Raihan melamar saya
                    dengan langsung menyatakan keinginan kepada orang tua saya.
                    Kami pun bersiap untuk membuka lembaran baru dalam kehidupan
                    kami.
                  </p>
                </div>
              </motion.div>

              <div className="absolute h-full w-1 bg-gray-700 rounded-b-full left-1/2 transform -translate-x-1/2 z-10">
                <div className="absolute w-4 h-12 rounded-full bg-pink-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <motion.div
                variants={slideLeft}
                style={{
                  paddingTop: '100%',
                }}
              >
                <div className="bg-white py-6 px-3 w-full shadow-lg space-y-1 font-roboto box-border">
                  <h2 className="font-poppins font-bold">2021</h2>
                  <p className="text-xs">
                    Momen spesial kami dimulai dari titik ini, momen awal kami
                    membangun keluarga kecil kami. Semoga Allah SWT menjadikan
                    keberkahandalam pernikahan kami.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </ContainerTemplate>
    </motion.section>
  );
}
