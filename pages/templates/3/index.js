import { useRef, useState } from "react";
import { ComponentHeader, CustomScrollbar } from "../../../components/atoms";
import Acara from "./Acara";
import Footer from "./Footer";
import Galeri from "./Galeri";
import LoveStory from "./LoveStory";
import Mempelai from "./Mempelai";
import Pembuka from "./Pembuka";
import Penutup from "./Penutup";
import Peta from "./Peta";

export default function index() {
  const audioRef = useRef();
  const [pageindex, setpageindex] = useState(0);

  const toggleAudio = () => {
    if (!audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      return;
    }
    audioRef.current.play();
  };
  let pageProps = { pageindex, setpageindex, toggleAudio };

  const PAGES = [
    <Pembuka {...pageProps} />,
    <Mempelai {...pageProps} />,
    <Acara {...pageProps} />,
    <LoveStory {...pageProps} />,
    <Galeri {...pageProps} />,
    <Peta {...pageProps} />,
    <Penutup {...pageProps} />,
  ];

  return (
    <div>
      <ComponentHeader title="Raihan dan Rahma" />
      <audio src="/wedding.mp3" ref={audioRef}></audio>

      <CustomScrollbar bgTrackY="bg-indigo200" bgThumbY="bg-indigo300">
        {PAGES[pageindex]}
        {pageindex !== 0 && <Footer {...pageProps} />}
      </CustomScrollbar>
    </div>
  );
}
