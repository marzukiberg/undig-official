import React, { useEffect } from "react";
import { zeroRightClassName } from "react-remove-scroll-bar";
import $ from "jquery";
import { animateMempelai } from "./mempelai";
import {
  hidden,
  fadeIn,
  initSlideLeft,
  initSlideRight,
  initSlideTop,
  slideTop,
  slideLeft,
  slideRight,
  slideDown,
} from "./animations";

const SLOW = 1200;
export default function Pembuka({ setShowFooter }) {
  useEffect(() => {
    const playAudio = () => {
      document.querySelector("#audio").play();
    };
    initSlideLeft(".name_left", 360);
    initSlideRight(".name_right", 360);
    hidden(".pembuka");
    fadeIn(".pembuka");
    [".belongs_to", ".open_invitation", ".names_holder"].forEach((item) =>
      initSlideTop(item)
    );
    slideTop(".names_holder", () => {
      slideLeft(".name_left");
      slideRight(".name_right");
      [".belongs_to", ".open_invitation"].forEach((item) => slideTop(item));
    });
    $(".btn1").on("click", function () {
      slideDown(
        ".btn1",
        () => {
          playAudio();
          setShowFooter(true);
          animateMempelai();
          window.location.href = "#mempelai";
        },
        "300%"
      );
    });
  });
  return (
    <section
      className={`pembuka d-flex flex-column justify-content-center align-items-center ${zeroRightClassName}`}
    >
      <span className="title salsa">The Wedding Of</span>
      <div className="names_holder">
        <img
          src="template_one/frame-nama.png"
          alt="Frame Nama"
          className="bg_holder img-fluid"
        />
        <div>
          <span className="name_left salsa">Raihan</span>
          <span className="and salsa">&</span>
          <span className="name_right salsa">Rahma</span>
        </div>
      </div>
      <div className="belongs_to text-center mb-3">
        <span className="yth d-block roboto">Kepada Yth:</span>
        <span className="name d-block roboto">Alumni SIF</span>
        <img src="template_one/underline-nama.png" alt="Underline Penerima" />
      </div>
      <button className="btn btn-transparent rounded-pill px-5 py-2 shadow open_invitation salsa btn1">
        Buka Undangan
      </button>
      <audio src="template_one/music.mp3" id="audio"></audio>
    </section>
  );
}
