import { BackgroundImageTemplate } from "@/components/atoms";
import { ContainerTemplate } from "@/components/organisms";
import React from "react";

export default function Mempelai() {
  return (
    <section id="mempelai" className="relative">
      <BackgroundImageTemplate src="/templates/3/background/2.png" />

      <ContainerTemplate>
        <div className="header font-roboto space-y-3 text-sm">
          <img
            src="/templates/3/embel/bismillah.png"
            alt="Bismillah"
            className="w-1/2 block mx-auto"
          />
          <p>
            <i>Assalamu’alikum Warahmatullahi Wabaraktuh</i>
            <br />
            Dengan memohon Rahmat dan Ridho Allah SWT, Mohon do’a restu
            Bapak/Ibu/Saudara dalam rangka melangsungkan pernikahan putra putri
            kami:
          </p>
        </div>

        <div className="content space-y-6">
          <div className="flex gap-x-3 rounded-xl group">
            <div>
              <img
                src="/templates/3/mempelai/pria.png"
                className="w-32 h-full rounded-xl shadow-lg
                transform group-hover:-translate-y-3 duration-300"
              />
            </div>
            <div className="text-center space-y-3 py-3">
              <h2 className="text-xl text-indigo300 font-salsa">
                Raihan bin Alfajri
              </h2>
              <img
                src="/templates/3/embel/underline-nama-mempelai.png"
                className="underline w-full"
              />
              <div className="space-y-0 font-quicksand">
                <p className="font-bold">Putra Pertama</p>
                <p>Bapak Alfajri</p>
                <p>Ibu Fitri Ramadhani</p>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>

          <div className="flex gap-x-3 rounded-xl group">
            <div className="text-center space-y-3 py-3">
              <h2 className="text-xl text-indigo300 font-salsa">
                Rahma binti Abdullah
              </h2>
              <img
                src="/templates/3/embel/underline-nama-mempelai.png"
                className="underline w-full"
              />
              <div className="space-y-0 font-quicksand">
                <p className="font-bold">Putri Kedua</p>
                <p>Bapak Abdullah</p>
              </div>
            </div>
            <div>
              <img
                src="/templates/3/mempelai/wanita.png"
                className="w-32 h-full rounded-xl shadow-lg transform group-hover:-translate-y-3 duration-300"
              />
            </div>
          </div>
        </div>
      </ContainerTemplate>
    </section>
  );
}
