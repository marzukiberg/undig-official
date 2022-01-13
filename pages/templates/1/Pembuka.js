import React from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import Container from '../../../components/organisms/Container';

export default function Pembuka({ setpageindex, toggleAudio }) {
  const bukaUndangan = () => {
    toggleAudio();
    setpageindex(1);
  };

  return (
    <section id="pembuka" className="relative">
      <BackgroundImage
        src="/templates/1/background/1.png"
        className="object-right"
        noOverlay
      />

      <Container noFrame>
        <h1 className="text-center font-salsa text-3xl text-pink-500">
          The Wedding Of
        </h1>

        <div className="content__names-holder relative text-center">
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
        </div>

        <div className="content__belongs font-roboto space-y-3">
          <div>
            <span>Kepada Yth:</span>
            <span>Alumni SIF</span>
          </div>
          <img
            src="/templates/1/embel/underline-nama.png"
            alt="Underline"
            className="w-1/2 object-contain block mx-auto mb-6"
          />
          <button
            className="rounded-full py-2 px-6 bg-pink-200 border text-pink-500 border-pink-500 font-salsa shadow-xl duration-300  hover:bg-pink-500 hover:text-white"
            onClick={bukaUndangan}
          >
            Buka Undangan
          </button>
        </div>
      </Container>
    </section>
  );
}
