import React from "react";
import "../RestaurantsInfo/RestaurantsInfo.css";
import Restaurants from "../RestaurantsInfo/RestaurantsSlide/RestaurantsSlide";
import Title from "../RestaurantsInfo/Title/Content";

function RestaurantsInfo() {
  return (
    <div>
      <div className="restaurant_box">
        <Title />
        <Restaurants />
      </div>
    </div>
  );
}

export default RestaurantsInfo;
