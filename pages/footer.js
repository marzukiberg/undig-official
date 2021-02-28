import React, { useEffect, useState } from "react";
import $ from "jquery";
import { animateMempelai } from "./template_one/mempelai";
import { animateAcara } from "./template_one/acara";
import { animateLoveStory } from "./template_one/love_story";
import { animateGaleri } from "./template_one/galeri";
import { animatePeta } from "./template_one/peta";

export default function Footer({ showFooter }) {
  const [active, setActive] = useState({
    mempelai: true,
    acara: false,
    loveStory: false,
    galeri: false,
    peta: false,
    penutup: false,
  });

  useEffect(() => {
    showFooter
      ? $("footer").css({ display: "flex", bottom: -64 }).animate({ bottom: 0 })
      : $("footer").css({ display: "none" });
  });
  const openMempelai = () => {
    setActive({ mempelai: true });
    animateMempelai();
  };
  const openAcara = () => {
    setActive({ acara: true });
    animateAcara();
  };
  const openLoveStory = () => {
    setActive({ loveStory: true });
    animateLoveStory();
  };
  const openGaleri = () => {
    setActive({ galeri: true });
    animateGaleri();
  };
  const openPeta = () => {
    setActive({ peta: true });
    animatePeta();
  };
  return (
    <footer>
      <a
        href="#mempelai"
        className={active.mempelai ? "active" : ""}
        onClick={openMempelai}
      >
        <img src="template_one/icon-mempelai.svg" alt="Footer Icon" />
      </a>
      <a
        href="#acara"
        className={active.acara ? "active" : ""}
        onClick={openAcara}
      >
        <img src="template_one/icon-acara.svg" alt="Footer Icon" />
      </a>
      <a
        href="#love_story"
        className={active.loveStory ? "active" : ""}
        onClick={openLoveStory}
      >
        <img src="template_one/icon-love-story.svg" alt="Footer Icon" />
      </a>
      <a
        href="#galeri"
        className={active.galeri ? "active" : ""}
        onClick={openGaleri}
      >
        <img src="template_one/icon-galeri.svg" alt="Footer Icon" />
      </a>
      <a
        href="#peta"
        className={active.peta ? "active" : ""}
        onClick={openPeta}
      >
        <img src="template_one/icon-peta.svg" alt="Footer Icon" />
      </a>
      <a
        href="#penutup"
        className={active.penutup ? "active" : ""}
        onClick={() => setActive({ penutup: true })}
      >
        <img src="template_one/icon-penutup.svg" alt="Footer Icon" />
      </a>
    </footer>
  );
}
