import Image from "next/image";
import React from "react";
import { BackgroundImageTemplate } from "@/components/atoms";
import { Container } from "@/components/organisms";
import { FrameNama } from "@/components/molecules";

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

      <Container>
        <h1 className="text-center font-salsa text-3xl text-pink-500 wow slideInLeft">
          The Wedding Of
        </h1>

        <FrameNama maleName="Raihan" femaleName="Rahma" />

        <div
          className="text-center font-roboto space-y-3 wow fadeInUp"
          data-wow-delay="600ms"
        >
          <div>
            <span>Kepada Yth:</span>
            <span>Alumni SIF</span>
          </div>
          <div className="w-full h-4 relative object-contain block mx-auto mb-6">
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
