import Image from "next/image";
import React from "react";
import { BackgroundImageTemplate } from "@/components/atoms";
import { Container } from "@/components/organisms";

export default function Pembuka({ setpageindex, toggleAudio }) {
  const bukaUndangan = () => {
    console.log("test");
    toggleAudio();
    setpageindex(1);
  };

  return (
    <section id="pembuka" className="relative wow fadeIn">
      <BackgroundImageTemplate
        src="/templates/1/background/1.png"
        className="object-right"
        noOverlay
      />

      <Container noFrame>
        <h1 className="text-center font-salsa text-3xl text-pink-500 wow slideInLeft">
          The Wedding Of
        </h1>

        <div className="content__names-holder relative text-center wow fadeInUp">
          <div className="content__names-background h-full block mx-auto object-contain ">
            <Image
              width={300}
              height={300}
              src="/templates/1/embel/frame-nama.png"
              alt="Frame Nama"
            />
          </div>
          <div className="content__names text-center w-full text-4xl text-pink-500 absolute top-1/2 left-0 transform -translate-y-1/2 font-salsa font-bold">
            <div className="">Raihan</div>
            <div className="">&</div>
            <div className="">Rahma</div>
          </div>
        </div>

        <div
          className="content__belongs font-roboto space-y-3 wow fadeInUp"
          data-wow-delay="600ms"
        >
          <div>
            <span>Kepada Yth:</span>
            <span>Alumni SIF</span>
          </div>
          <div className="w-1/2 h-4 relative object-contain block mx-auto mb-6">
            <Image
              layout="fill"
              objectFit="contain"
              src="/templates/1/embel/underline-nama.png"
              alt="Underline"
            />
          </div>
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
