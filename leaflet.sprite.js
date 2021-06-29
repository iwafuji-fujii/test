import { openReverseGeocoder } from "https://cdn.skypack.dev/@geolonia/open-reverse-geocoder@latest";

const map = new geolonia.Map("#map");

map.on("move", () => {
  const center = map.getCenter();
  openReverseGeocoder(Object.values(center))
    .then((res) => {
      console.log(res);
      if (res.code) {
        document.querySelector(
          "#address"
        ).innerText = `${res.prefecture}${res.city}`;
      } else {
        document.querySelector("#address").innerText =
          "地図を動かしてください。";
      }
    })
    .catch((error) => {
      document.querySelector("#address").innerText = "地図を動かしてください。";
    });
});
