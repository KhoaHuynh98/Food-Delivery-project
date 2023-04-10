import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleContent from "./components/Layout/TitleContent/TitleContent";
import TitleFooter from "./components/Layout/TitleFooter/TitleFooter";
import TitleHeader from "./components/Layout/TitleHeader/TitleHeader";
import RestaurantsInfo from "./components/Layout/RestaurantsInfo/RestaurantsInfo";
import NearestRestaurants from "./components/Layout/NearestRestaurants/NearestRestaurants";
import Specialities from "./components/Layout/Specialities/Specialities";
import Lemon from "./components/Layout/Lemon/Lemon";
import Map from "./components/Layout/Map/Map";
import Instagram from "./components/Layout/Instagram/Instagram";
import Footer from "./components/Layout/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
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
      <Footer />
    </Provider>
  </React.StrictMode>
);
