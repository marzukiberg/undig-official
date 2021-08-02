import React from 'react';
import { BackgroundImage } from '../components/BackgroundImage';
import ContainerTemplate from '../components/ContainerTemplate';

export default function Mempelai() {
  return (
    <section id="mempelai" className="relative">
      <BackgroundImage src="/template_one/bg-s2.jpg" />

      <ContainerTemplate>
        <div className="header font-roboto space-y-3 text-sm">
          <img
            src="template_one/bismillah.png"
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
          <div className="flex gap-x-3 rounded-xl  bg-white shadow-lg border group">
            <div>
              <img
                src="template_one/mempelai-pria.png"
                className="w-32 h-full rounded-xl shadow-lg
                transform group-hover:-translate-y-3 duration-300"
              />
            </div>
            <div className="text-center space-y-3 p-3 flex-grow">
              <h2 className="text-xl text-yellow-400 font-salsa">
                Raihan bin Alfajri
              </h2>
              <img
                src="template_one/underline-nama-mempelai.png"
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

          <div className="gap-x-3 rounded-xl flex  bg-white shadow-lg border group">
            <div className="text-center space-y-3 p-3">
              <h2 className="text-xl text-yellow-400 font-salsa">
                Rahma binti Abdullah
              </h2>
              <img
                src="template_one/underline-nama-mempelai.png"
                className="underline w-full"
              />
              <div className="space-y-0 font-quicksand">
                <p className="font-bold">Putri Kedua</p>
                <p>Bapak Abdullah</p>
              </div>
            </div>
            <div>
              <img
                src="template_one/mempelai-wanita.png"
                className="w-32 h-full rounded-xl shadow-lg transform group-hover:-translate-y-3 duration-300"
              />
            </div>
          </div>
        </div>
      </ContainerTemplate>
    </section>
  );
}
