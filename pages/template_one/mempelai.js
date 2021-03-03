import React, { useEffect } from "react";
import {
  fadeIn,
  hidden,
  initSlideLeft,
  initSlideRight,
  initSlideTop,
  slideLeft,
  slideRight,
  slideTop,
} from "./animations";

export const animateMempelai = () => {
  [".salam", ".img-bismillah"].forEach((item) => hidden(item));
  initSlideRight(".holder_left");
  initSlideLeft(".holder_right");
  initSlideTop(".section_frame");
  slideTop(".section_frame");
  fadeIn(".img-bismillah", () => {
    fadeIn(".salam", () => {
      slideRight(".holder_left");
      slideLeft(".holder_right");
    });
  });
};
export default function Mempelai() {
  useEffect(() => {
    animateMempelai();
  }, []);

  return (
    <div className="with_scroll">
      <section
        id="mempelai"
        className="mempelai with_frame d-flex flex-column pb-5"
      >
        <div className="section_frame">
          <img
            src="template_one/bismillah.png"
            alt="Bismillah"
            className="img-bismillah mb-3 mx-4"
          />
          <p className="salam times-new-roman mb-3">
            <i>Assalamu’alikum Warahmatullahi Wabaraktuh</i>
            <br />
            Dengan memohon Rahmat dan Ridho Allah SWT, Mohon do’a restu
            Bapak/Ibu/Saudara dalam rangka melangsungkan pernikahan putra putri
            kami:
          </p>

          <div className="mempelai_holder">
            <div className="card mb-3 border-0 bg-transparent holder_left">
              <div className="row no-gutters">
                <div className="col-4">
                  <img
                    src="template_one/mempelai-pria.png"
                    alt="Mempelai pria"
                    className="card-img"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body pt-0 d-flex flex-column justify-content-center">
                    <span className="mempelai_name salsa">
                      Raihan bin Alfajri
                    </span>
                    <img
                      src="template_one/underline-nama-mempelai.png"
                      alt="Underline Nama Mempelai"
                      className="img-fluid mempelai_underline"
                    />
                    <span className="label_ortu font-weight-bold salsa">
                      Putra Pertama
                    </span>
                    <span className="name_ortu times-new-roman">
                      Bapak Alfajri
                    </span>
                    <span className="name_ortu times-new-roman">
                      Ibu Fitri Ramadhani
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 border-0 bg-transparent holder_right">
              <div className="row no-gutters d-flex flex-row-reverse">
                <div className="col-4">
                  <img
                    src="template_one/mempelai-wanita.png"
                    alt="Mempelai wanita"
                    className="card-img"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body pt-0 d-flex flex-column justify-content-center">
                    <span className="mempelai_name salsa">
                      Rahma binti Abdullah
                    </span>
                    <img
                      src="template_one/underline-nama-mempelai.png"
                      alt="Underline Nama Mempelai"
                      className="img-fluid mempelai_underline"
                    />
                    <span className="label_ortu font-weight-bold salsa">
                      Putri Kedua
                    </span>
                    <span className="name_ortu times-new-roman">
                      Bapak Abdullah
                    </span>
                    <span className="name_ortu times-new-roman">
                      Ibu Salsabillah
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
