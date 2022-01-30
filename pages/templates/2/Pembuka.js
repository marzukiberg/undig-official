import Image from "next/image";
import { FrameNama } from "@/components/molecules";
import { TemplateWrapper } from "@/components/organisms";

export default function Pembuka({ setpageindex, toggleAudio }) {
  const bukaUndangan = () => {
    toggleAudio();
    setpageindex(1);
  };

  return (
    <TemplateWrapper
      backgroundImage="/templates/2/background/1.png"
      backgroundClasses="object-right"
      noOverlay
    >
      <h1 className="text-center font-salsa text-3xl text-green700">
        The Wedding Of
      </h1>

      <FrameNama type={2} maleName="Raihan" femaleName="Rahma" />

      <div className="content__belongs font-roboto space-y-3">
        <div>
          <span className="text-sm font-segoe">Kepada Yth:</span>
          <span className="block mb-3 font-bold">Alumni SIF</span>
        </div>
        <div className="w-64 h-4 object-contain block mx-auto mb-6 relative">
          <Image
            layout="fill"
            objectFit="contain"
            src="/templates/2/embel/underline-nama.png"
            alt="Underline"
          />
        </div>
        <button
          className="rounded-full py-2 px-6 bg-green200 border-2 text-white border-green700 font-salsa shadow-xl duration-300  hover:bg-green700 hover:text-white"
          onClick={bukaUndangan}
        >
          Buka Undangan
        </button>
      </div>
    </TemplateWrapper>
  );
}
