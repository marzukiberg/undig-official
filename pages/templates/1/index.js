import { useRef, useState } from "react";
import Scrollbar from "react-scrollbars-custom";
import { ComponentHeader } from "../../../components/atoms";
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
    <div className="template_one">
      <audio src="/wedding.mp3" ref={audioRef}></audio>
      <ComponentHeader title="Raihan dan Rahma" />

      <Scrollbar
        className="max-w-md mx-auto min-h-screen overflow-x-hidden shadow-xl"
        trackYProps={{
          renderer: (props) => {
            const { elementRef, ...restProps } = props;
            return (
              <span
                {...restProps}
                ref={elementRef}
                className="trackY bg-pink-100"
              />
            );
          },
        }}
        thumbYProps={{
          renderer: (props) => {
            const { elementRef, ...restProps } = props;
            return (
              <span
                {...restProps}
                ref={elementRef}
                className="thumbY bg-pink-300"
              />
            );
          },
        }}
      >
        {PAGES[pageindex]}
        {pageindex !== 0 && <Footer {...pageProps} />}
      </Scrollbar>
    </div>
  );
}
