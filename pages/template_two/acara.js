import React, { useEffect } from "react";
import $ from "jquery";
import Countdown from "react-countdown";
import {
  fadeIn,
  hidden,
  initPopup,
  showPopup,
  initSlideRight,
  slideRight,
} from "./animations";

export const animateAcara = () => {
  initSlideRight(".acara .title");
  initPopup(".date_frame");
  hidden(".akad_nikah_underline");
  hidden(".countdown_timer");
  $(".acara")
    .css({ opacity: 0 })
    .animate({ opacity: 1 }, () => {
      slideRight(".acara .title");
      fadeIn(".acara .akad_nikah_underline", () => {
        showPopup(".date_frame", () => {
          fadeIn(".countdown_timer");
        });
      });
    });
};
export default function Acara() {
  useEffect(() => {
    animateAcara();
  }, []);
  const DateFrame = ({ t1, t2, t3, t4, t5, t6, t7 }) => (
    <div className="date_frame mb-3">
      <div className="date_holder mb-3">
        <div className="day_holder left">
          <span className="d-block averia-serif-libre font-weight-bold dh_first">
            {t2}
          </span>
          <span className="d-block dh_second">{t3}</span>
        </div>
        <span className="big_date font-weight-bold">{t1}</span>
        <div className="day_holder right">
          <span className="d-block averia-serif-libre font-weight-bold dh_first">
            {t4}
          </span>
          <span className="d-block dh_second">{t5}</span>
        </div>
      </div>
      <span
        className="d-block mx-auto font-weight-bold averia-serif-libre"
        style={{ fontSize: 14 }}
      >
        {t6}
      </span>
      <span
        className="d-block-mx-auto averia-serif-libre"
        style={{ fontSize: 14 }}
      >
        {t7}
      </span>
    </div>
  );
  const CountDownTimer = () => (
    <Countdown
      autoStart
      date={Date.parse("2021-4-24 10:00")}
      renderer={({ days, hours, minutes, seconds, completed }) => (
        <div className="countdown_timer mb-5">
          <span className="d-block text-center salsa font-weight-bold mb-3">
            Hitung Mundur Acara{" "}
            <span className="text-yellow">Resepsi Pernikahan</span>
          </span>
          <div
            className="d-flex justify-content-center mx-auto"
            style={{ gap: 12 }}
          >
            <div className="countdown d-flex flex-column">
              <span className="time salsa font-weight-bold">{days}</span>
              <span className="label roboto">Hari</span>
            </div>
            <div className="countdown d-flex flex-column">
              <span className="time salsa font-weight-bold">{hours}</span>
              <span className="label roboto">Jam</span>
            </div>
            <div className="countdown d-flex flex-column">
              <span className="time salsa font-weight-bold">{minutes}</span>
              <span className="label roboto">Menit</span>
            </div>
            <div className="countdown d-flex flex-column">
              <span className="time salsa font-weight-bold">{seconds}</span>
              <span className="label roboto">Detik</span>
            </div>
          </div>
        </div>
      )}
    />
  );
  return (
    <div className="with_scroll">
      <section id="acara" className="acara with_frame">
        <div className="section_frame">
          <span className="title salsa font-weight-bold">Rangkaian Acara</span>
          <img
            src="template_two/akad_underline.png"
            alt="Akad Nikah Underline"
            className="img-fluid akad_nikah_underline mb-3"
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
            src="template_two/resepsi_underline.png"
            alt="Resepsi Pernikahan Underline"
            className="img-fluid akad_nikah_underline mb-3"
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
          <CountDownTimer />
        </div>
      </section>
    </div>
  );
}
