export const initializeMap = async (mapEl, mapLinkEl) => {
  const lat = 0.4709833;
  const long = 101.38293;
  const mymap = await L.map(mapEl).setView([lat, long], 14);
  const accessToken =
    "pk.eyJ1IjoibWFyenVraWJlcmciLCJhIjoiY2tmcm4xbnlpMGV0cDJwbnBkbXN0ZGZtOSJ9.t_s6XqB0K2keyQMx349FPA";

  await mapLinkEl.setAttribute(
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

  await L.marker([lat, long]).addTo(mymap);
};
