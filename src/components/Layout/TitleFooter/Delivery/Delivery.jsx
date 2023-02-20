import React from "react";
import "./Delivery.css";
import delivery from "../../../../assets/delivery.png";

function Delivery() {
  return (
    <div>
      <div className="delivery">
        <div>
          <img src={delivery} alt="" />
        </div>
        <div>
          <h2 className="delivery_h2">Free delivery from 29 euros</h2>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
