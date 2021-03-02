import Head from "next/head";
import React, { useEffect } from "react";
import $ from "jquery";
import { fadeIn, hidden, initPopup, showPopup } from "./animations";

export const animatePeta = () => {
  initPopup(".peta .section_frame");
  hidden(".map");
  showPopup(".peta .section_frame", () => {
    fadeIn(".map");
  });
};
export default function Peta() {
  useEffect(() => {
    animatePeta();
    setTimeout(() => {
      initMap();
    }, 2000);
  }, []);
  const initMap = async () => {
    const lat = 0.4709833,
      long = 101.38293,
      mymap = await L.map("map").setView([lat, long], 14),
      accessToken =
        "pk.eyJ1IjoibWFyenVraWJlcmciLCJhIjoiY2tmcm4xbnlpMGV0cDJwbnBkbXN0ZGZtOSJ9.t_s6XqB0K2keyQMx349FPA",
      mapLink = $("#mapLink");

    await mapLink.attr(
      "href",
      `https://www.google.com/maps/@${lat},${long},15z`
    );
    await L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: accessToken,
      }
    ).addTo(mymap);
    // add marker
    await L.marker([lat, long]).addTo(mymap);
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        />
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
      </Head>
      <section id="peta" className="peta with_frame d-flex flex-column">
        <div className="section_frame">
          <span className="title salsa">Peta Lokasi</span>
          <img
            src="template_one/love-story-underline.svg"
            alt="Underline Lokasi"
            className="img-fluid lokas_underline mb-3"
          />
          <div className="text-center mb-3">
            <span
              className="font-weight-bold d-block roboto"
              style={{ fontSize: 14 }}
            >
              Kediaman Mempelai Wanita
            </span>
            <span className="d-block roboto" style={{ fontSize: 14 }}>
              Jalan Bina Keluarga
            </span>
          </div>
          <div id="map" className="map mb-3" style={{ height: 300 }} />
          <div className="d-block mx-auto roboto" style={{ fontSize: 14 }}>
            Lihat di{" "}
            <a href="#" id="mapLink" target="_blank" className="link">
              Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
