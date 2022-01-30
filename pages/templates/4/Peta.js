import React, { useEffect, useRef } from "react";
import { TemplateWrapper } from "@/components/organisms";
import { initializeMap } from "@/utils/component-utils";
import Image from "next/image";

export default function Peta() {
  const mapRef = useRef();
  const mapLinkRef = useRef();
  useEffect(async () => {
    if (window !== undefined) {
      initializeMap(mapRef.current, mapLinkRef.current);
    }
  }, []);

  return (
    <TemplateWrapper backgroundImage="/templates/3/background/6.png">
      <div className="header text-center font-quicksand space-y-3">
        <div>
          <div>
            <Image
              src="/templates/3/embel/title-section-6.png"
              alt="Title"
              width={150}
              height={32}
              objectFit="contain"
            />
          </div>
          <div>
            <Image
              src="/templates/3/embel/underline-3.png"
              alt="Underline Lokasi"
              width={150}
              height={32}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="text-center space-y-2 font-roboto">
          <span className="font-bold block">Kediaman Mempelai Wanita</span>
          <span>Jalan Bina Keluarga</span>
        </div>
      </div>

      <div className="content space-y-3">
        <div
          id="map"
          ref={mapRef}
          className="map w-full h-80 rounded-xl shadow-lg"
        />
        <div className="text-center font-roboto">
          Lihat di{" "}
          <a
            href="#"
            ref={mapLinkRef}
            target="_blank"
            className="text-pink-500"
          >
            Google Maps
          </a>
        </div>
      </div>
    </TemplateWrapper>
  );
}
