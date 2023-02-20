import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TitleContent from "./components/Layout/TitleContent/TitleContent";
import TitleFooter from "./components/Layout/TitleFooter/TitleFooter";
import TitleHeader from "./components/Layout/TitleHeader/TitleHeader";
import RestaurantsInfo from "./components/Layout/RestaurantsInfo/RestaurantsInfo";
import NearestRestaurants from "./components/Layout/NearestRestaurants/NearestRestaurants";
import Specialities from "./components/Layout/Specialities/Specialities";
import Lemon from "./components/Layout/Lemon/Lemon";
import Map from "./components/Layout/Map/Map";
import Instagram from "./components/Layout/Instagram/Instagram";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <TitleHeader />
    <TitleContent />
    <TitleFooter />
    <RestaurantsInfo />
    <NearestRestaurants />
    <Specialities />
    <Lemon />
    <Map />
    <Instagram />
  </React.StrictMode>
);
