import React, { useEffect } from 'react';
import { BackgroundImage } from '../components/BackgroundImage';
import ContainerTemplate from '../components/ContainerTemplate';
import CountdownTimer from './components/CountdownTimer';

export const animateAcara = () => {};
export default function Acara() {
  useEffect(() => {
    animateAcara();
  }, []);
  const DateFrame = ({ t1, t2, t3, t4, t5, t6, t7 }) => (
    <div className="font-averia grid gap-3 place-items-center">
      <div className="relative">
        <div className="text-right absolute -left-full top-1/2 transform -translate-y-1/2 w-full pr-3">
          <span className="block font-bold">{t2}</span>
          <span className="block font-roboto text-xs">{t3}</span>
        </div>
        <div className="w-20 h-20 rounded-full bg-white shadow-lg font-bold flex items-center justify-center border-4 border-yellow-500 text-2xl">
          {t1}
        </div>
        <div className="text-left absolute -right-full top-1/2 transform -translate-y-1/2 w-full pl-3">
          <span className="block font-bold">{t4}</span>
          <span className="block font-roboto text-xs">{t5}</span>
        </div>
      </div>
      <div className="space-y-2 text-center font-averia">
        <span className="block font-bold">{t6}</span>
        <span>{t7}</span>
      </div>
    </div>
  );

  return (
    <section id="acara" className="acara relative">
      <BackgroundImage src="/template_one/bg-section-3.png" />

      <ContainerTemplate>
        <h1 className="text-center font-salsa text-2xl">Rangkaian Acara</h1>

        <div className="content space-y-3">
          <img
            src="template_one/akad.png"
            alt="Akad Nikah"
            className="w-full"
          />
          <DateFrame
            t1="23"
            t2="Jumat"
            t3="09.00 WIB"
            t4="April"
            t5="2021"
            t6="Kediaman Mempelai Wanita"
            t7="Jalan Bina Keluarga"
          />
          <img
            src="template_one/resepsi.png"
            alt="Resepsi Pernikahan Underline"
            className="w-full"
          />
          <DateFrame
            t1="24"
            t2="Sabtu"
            t3="10.00 - 17.00 WIB"
            t4="April"
            t5="2021"
            t6="Kediaman Mempelai Wanita"
            t7="Jalan Bina Keluarga"
          />
          <CountdownTimer date={'2021-10-24 10:00'} />
        </div>
      </ContainerTemplate>
    </section>
  );
}
