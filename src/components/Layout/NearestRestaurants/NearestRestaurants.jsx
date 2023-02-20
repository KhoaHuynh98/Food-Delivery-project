import React from "react";
import "../NearestRestaurants/NearestRestaurants.css";
import Content from "../NearestRestaurants/Content/Content";
import TypeBox from "../NearestRestaurants/TypeBox/TypeBox";
import SendBox from "./SendBox/SendBox";

function NearestRestaurants() {
  return (
    <div>
      <div className="nearest">
        <div className="nearest_content">
          <Content />
        </div>
        <div className="nearest_box">
          <TypeBox />
          <SendBox />
        </div>
      </div>
    </div>
  );
}

export default NearestRestaurants;
