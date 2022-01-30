import { FrameNama } from "@/components/molecules";
import Image from "next/image";
import React from "react";
import { TemplateWrapper } from "@/components/organisms";

export default function Pembuka({ setpageindex, toggleAudio }) {
  const bukaUndangan = () => {
    toggleAudio();
    setpageindex(1);
  };

  return (
    <TemplateWrapper
      noOverlay
      backgroundImage="/templates/3/background/1.png"
      backgroundClasses="object-right"
    >
      <h1 className="text-center font-salsa text-3xl text-indigo500">
        The Wedding Of
      </h1>

      <FrameNama maleName="Raihan" femaleName="Rahma" type={3} />

      <div className="content__belongs font-roboto space-y-3">
        <div>
          <span className="text-sm font-segoe">Kepada Yth:</span>
          <span className="block mb-3 font-bold">Alumni SIF</span>
        </div>
        <div className="w-1/2 h-4 object-contain block mx-auto mb-6 relative">
          <Image
            src="/templates/3/embel/underline-nama.png"
            alt="Underline"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <button
          className="rounded-full py-2 px-6 bg-indigo300 text-white border-4 border-indigo700 font-salsa shadow-xl duration-300  hover:bg-indigo900 hover:text-white"
          onClick={bukaUndangan}
        >
          Buka Undangan
        </button>
      </div>
    </TemplateWrapper>
  );
}
