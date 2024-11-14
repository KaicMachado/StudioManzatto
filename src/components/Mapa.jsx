/* eslint-disable no-undef */
import { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const coordenadasLoja = { lat: -20.655413389189686, lng: -40.49058233368768 };
const MapaLocalizacao = () => {
 const width = document.body.offsetWidth;
 useEffect(() => {
  const loader = new Loader({
   apiKey: "AIzaSyA-vpnEZ4v_6ezmFW1PL0rH60p9Eh0-GxU", // Substitua pela sua chave de API
   version: "weekly",
   libraries: ["marker"],
  });

  const initializeMap = async () => {
   // Carrega as bibliotecas de forma assíncrona
   await loader.importLibrary("maps");
   await loader.importLibrary("marker");

   const map = new google.maps.Map(document.getElementById("map"), {
    center: coordenadasLoja,
    zoom: 15,
    disableDefaultUI: true,
    mapId: "DEMO_MAP_ID",
   });

   // eslint-disable-next-line no-unused-vars
   const marker = new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: coordenadasLoja,
    title: "Studio Manzatto",
   });
  };

  initializeMap();
 }, []);

 return (
  <div
   id="map"
   style={
    width > 550
     ? { width: "400px", height: "300px" }
     : { width: "200px", height: "200px" }
   }
  ></div>
 );
};

export default MapaLocalizacao;
