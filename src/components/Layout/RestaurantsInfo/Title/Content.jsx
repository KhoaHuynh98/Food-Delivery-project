import React from "react";
import "./Content.css";

function Content() {
  return (
    <div>
      <div className="restaurant_title">
        <div>
          <h1 className="restaurant_h1">Restaurants</h1>
        </div>
        <div>
          <button className="restaurant_button">show all</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
