/* eslint-disable no-undef */
import { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const coordenadasLoja = { lat: -20.655413389189686, lng: -40.49058233368768 };
const apiKey = import.meta.env.VITE_API_KEY;

const MapaLocalizacao = () => {
 useEffect(() => {
  const loader = new Loader({
   apiKey: apiKey, // Substitua pela sua chave de API
   version: "weekly",
   libraries: ["marker"],
  });

  const initializeMap = async () => {
   await loader.importLibrary("maps");
   await loader.importLibrary("marker");

   const map = new google.maps.Map(document.getElementById("map"), {
    center: coordenadasLoja,
    zoom: 15,
    disableDefaultUI: true,
    mapId: "DEMO_MAP_ID",
   });

   new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: coordenadasLoja,
    title: "Studio Manzatto",
   });
  };

  initializeMap();
 }, []); // A dependência vazia garante que isso seja executado apenas uma vez

 const width = document.body.offsetWidth;

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
