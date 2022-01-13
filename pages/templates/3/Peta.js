import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import ContainerTemplate from '../../components/ContainerTemplate';
import { fadeIn, fadeInUp } from '../../utils/Constants';

export default function Peta() {
  const mapRef = useRef();
  const mapLinkRef = useRef();
  useEffect(async () => {
    if (window !== undefined) {
      initMap();
    }
  }, []);

  const initMap = async () => {
    const lat = 0.4709833,
      long = 101.38293,
      mymap = await L.map(mapRef.current).setView([lat, long], 14),
      accessToken =
        'pk.eyJ1IjoibWFyenVraWJlcmciLCJhIjoiY2tmcm4xbnlpMGV0cDJwbnBkbXN0ZGZtOSJ9.t_s6XqB0K2keyQMx349FPA';

    await mapLinkRef.current.setAttribute(
      'href',
      `https://www.google.com/maps/@${lat},${long},15z`
    );
    await L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: accessToken,
      }
    ).addTo(mymap);

    await L.marker([lat, long]).addTo(mymap);
  };

  return (
    <motion.section
      variants={fadeIn}
      initial="hide"
      animate="show"
      id="peta"
      className="peta relative"
    >
      <BackgroundImage src="/templates/3/background/6.png" />

      <ContainerTemplate>
        <motion.div
          variants={fadeInUp}
          className="header text-center font-quicksand space-y-3"
        >
          <img
            src="/templates/3/embel/title-section-6.png"
            alt="Title"
            className="w-1/2 block mx-auto"
          />
          <img
            src="/templates/3/embel/underline-3.png"
            alt="Underline Lokasi"
            className="w-1/2 block mx-auto"
          />
          <div className="text-center space-y-2 font-roboto">
            <span className="font-bold block">Kediaman Mempelai Wanita</span>
            <span>Jalan Bina Keluarga</span>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="content space-y-3">
          <div
            id="map"
            ref={mapRef}
            className="map w-full h-80 rounded-xl shadow-lg"
          />
          <div className="text-center font-roboto">
            Lihat di{' '}
            <a
              href="#"
              ref={mapLinkRef}
              target="_blank"
              className="text-pink-500"
            >
              Google Maps
            </a>
          </div>
        </motion.div>
      </ContainerTemplate>
    </motion.section>
  );
}
