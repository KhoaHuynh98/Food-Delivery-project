import React from "react";
import "../TypeBox/TypeBox.css";
import location from "../../../../assets/location.png";

function TypeBox() {
  return (
    <div>
      <div className="typebox">
        <div>
          <img src={location} alt="" className="typebox_img" />
        </div>
        <div className="typebox_text">
          <input type="Enter delivery address" className="typebox_input" />
        </div>
      </div>
    </div>
  );
}

export default TypeBox;
