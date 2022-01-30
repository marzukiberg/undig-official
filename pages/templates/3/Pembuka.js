import { BackgroundImageTemplate } from "@/components/atoms";
import { ContainerTemplate } from "@/components/organisms";
import Image from "next/image";
import React from "react";
import { FrameNama } from "../../../components/molecules/FrameNama";
import classess from "./Pembuka.module.css";

export default function Pembuka({ setpageindex, toggleAudio }) {
  const bukaUndangan = () => {
    toggleAudio();
    setpageindex(1);
  };

  return (
    <section id="pembuka" className="relative">
      <BackgroundImageTemplate
        src="/templates/3/background/1.png"
        className="object-right"
        noOverlay
      />

      <ContainerTemplate noFrame>
        <h1 className="text-center font-salsa text-3xl text-indigo500">
          The Wedding Of
        </h1>

        <FrameNama maleName="Raihan" femaleName="Rahma" type={3} />

        <div className="content__belongs font-roboto space-y-3">
          <div>
            <span className="text-sm font-segoe">Kepada Yth:</span>
            <span className="block mb-3 font-bold">Alumni SIF</span>
          </div>
          <img
            src="/templates/3/embel/underline-nama.png"
            alt="Underline"
            className="w-1/2 object-contain block mx-auto mb-6"
          />
          <button
            className="rounded-full py-2 px-6 bg-indigo300 text-white border-4 border-indigo700 font-salsa shadow-xl duration-300  hover:bg-indigo900 hover:text-white"
            onClick={bukaUndangan}
          >
            Buka Undangan
          </button>
        </div>
      </ContainerTemplate>
    </section>
  );
}
