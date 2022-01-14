import React, { useState } from "react";
import Image from "next/image";
import { BackgroundImageTemplate } from "@/components/atoms";
import { ContainerTemplate } from "@/components/organisms";

export default function Penutup() {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <section id="penutup" className="penutup relative">
      <BackgroundImageTemplate src="/templates/2/background/7.png" />

      <ContainerTemplate useFrame>
        <div className="header text-center font-roboto space-y-3 text-sm">
          <p className="font-bold">
            Bagi para tamu undangan diharapkan mengikuti protokol pecegahan
            Covid-19. (Memakai masker dan menjaga jarak fisik)
          </p>
          <p>
            “Dan diantara tanda-tanda kekuasaan-Nya ialah Dia Menciptakan
            untukmu istri-istri, supaya kamu cenderung dan merasa tentram
            kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.
            Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
            bagi kaum yang berpikir.” <br /> (Q.S. Ar-Rum : 21) <br />
            <strong>Wassalamu’alaikum Warahmatullahi Wabarakatuh</strong>
          </p>
        </div>
        <div className="content space-y-3">
          <div className="font-quicksand flex flex-col items-center text-sm">
            <span>Turut Berbahagia</span>
            <span>Segenap Keluarga Besar</span>
          </div>
          <div className="font-segoe font-bold text-2xl text-green700">
            ~ Raihan <span className="text-dark">&</span> Rahma ~
          </div>
          <p className="font-quicksand text-sm">
            Tekan tombol konfirmasi di bawah ini! Dan pastikan kehadiran kamu
          </p>
          <button
            className="block mx-auto px-6 py-2 bg-green700 rounded-lg shadow-lg text-white font-poppins duration-300"
            onClick={toggleModal}
          >
            Konfirmasi Kehadiran
          </button>

          <div className="space-y-3 font-quicksand text-sm">
            <div className="bg">
              Website Invitation Supported By <br />
              <span className="text-green700 font-bold cursor-pointer">
                Undig Official
              </span>
            </div>
            <div className="grid gap-x-3 grid-cols-2">
              <a
                href="#"
                target="_blank"
                className="p-3 flex flex-col items-center font-bold"
              >
                <Image
                  width={36}
                  height={36}
                  objectFit="contain"
                  src="/templates/2/whatsapp.svg"
                  alt="Whatsapp"
                />
                <span className="d-block">082286062083</span>
              </a>

              <a
                href="#"
                target="_blank"
                className="p-3 flex flex-col items-center font-bold"
              >
                <Image
                  width={36}
                  height={36}
                  objectFit="contain"
                  src="/templates/2/instagram.svg"
                  alt="Instagram"
                />
                <span className="d-block">undig_official</span>
              </a>
            </div>
          </div>
        </div>
      </ContainerTemplate>

      <div
        className={`absolute left-0 top-0 bg-black bg-opacity-20 w-full h-full z-50 flex justify-center items-center transform ${
          show ? "scale-100" : "scale-0"
        }`}
      >
        <div
          className={`mx-auto bg-white p-6 space-y-6 rounded transform duration-300 ${
            show ? "scale-100" : "scale-0"
          }`}
        >
          <div className="space-y-2">
            <label className="block" htmlFor="kehadiran">
              Kehadiran
            </label>
            <select
              name="kehadiran"
              id="kehadiran"
              className="bg-gray-100 w-full rounded"
            >
              <option value="">- Pilih --</option>
              <option value="Hadir">Hadir</option>
              <option value="InsyaAllah hadir">InsyaAllah hadir</option>
              <option value="Tidak dapat hadir">Tidak dapat hadir</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block" htmlFor="nama">
              Nama
            </label>
            <input
              type="text"
              className="bg-gray-100 w-full rounded"
              placeholder="Nama"
            />
          </div>
          <div className="space-y-2">
            <label className="block" htmlFor="ucapan">
              Ucapan & Doa
            </label>
            <textarea
              name="ucapan"
              className="bg-gray-100 w-full rounded"
            ></textarea>
          </div>

          <div className="space-y-2">
            <button className="py-2 block bg-green-500 text-white font-poppins rounded w-full">
              Konfirmasi Kehadiran
            </button>
            <button
              className="py-2 block bg-gray-300 font-poppins rounded w-full"
              onClick={toggleModal}
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
