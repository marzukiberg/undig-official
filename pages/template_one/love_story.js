import React, { useEffect } from "react";
import {
  fadeIn,
  hidden,
  initPopup,
  initSlideTop,
  showPopup,
  slideTop,
} from "./animations";

export const animateLoveStory = () => {
  initPopup(".love_story .love_story_underline");
  hidden(".love_story .title");
  hidden(".dalil");
  initSlideTop(".timelines", "100vh");
  fadeIn(".love_story .title", () => {
    showPopup(".love_story .love_story_underline");
    fadeIn(".dalil", () => {
      slideTop(".timelines");
    });
  });
};
export default function LoveStory() {
  useEffect(() => {
    animateLoveStory();
  });
  return (
    <div className="with_scroll">
      <section id="love_story" className="love_story with_frame">
        <div className="section_frame">
          <span className="title segoe-print font-weight-bold">Love Story</span>
          <img
            src="template_one/love-story-underline.svg"
            alt="Underline Love Story"
            className="img-fluid love_story_underline mb-3"
          />
          <p className="dalil calibri">
            “Dan diantara tanda-tanda kekuasaan-Nya ialah Dia Menciptakan
            untukmu istri-istri, supaya kamu cenderung dan merasa tentram
            kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.
            Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
            bagi kaum yang berpikir.” <br />
            Q.S. Ar-Rum : 21 <br />
            <br /> --
          </p>

          <div className="timelines mb-5">
            <div className="timeline left">
              <div className="timeline-box">
                <h2 className="times-new-roman font-weight-bold">2018</h2>
                <p>
                  Kami pertama kali bertemu satu sama lain di sebuah acara
                  perminatan di kampus. Kami berkenalan menjadi perwakilan dari
                  masing-masing divisi.
                </p>
              </div>
            </div>
            <div className="timeline right">
              <div className="timeline-box">
                <h2 className="times-new-roman font-weight-bold">2019</h2>
                <p>
                  Setelah sekian lama tidak bertemu, kami bertemu kembali di
                  suatu kegiatan sosial. Kebetulan kami berada dalam lembaga
                  yang sama.
                </p>
              </div>
            </div>
            <div className="timeline left">
              <div className="timeline-box">
                <h2 className="times-new-roman font-weight-bold">2020</h2>
                <p>
                  Salah satu momen yang tidak diduga-duga, Raihan melamar saya
                  dengan langsung menyatakan keinginan kepada orang tua saya.
                  Kami pun bersiap untuk membuka lembaran baru dalam kehidupan
                  kami.
                </p>
              </div>
            </div>
            <div className="timeline right">
              <div className="timeline-box">
                <h2 className="times-new-roman font-weight-bold">2021</h2>
                <p>
                  Momen spesial kami dimulai dari titik ini, momen awal kami
                  membangun keluarga kecil kami. Semoga Allah SWT menjadikan
                  keberkahandalam pernikahan kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
