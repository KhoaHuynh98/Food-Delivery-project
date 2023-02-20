import React from "react";
import "./Heart.css";
import heart from "../../../../assets/heart.png";

function Heart() {
  return (
    <div>
      <div className="heart">
        <div>
          <img src={heart} alt="" />
        </div>
        <div>
          <h2 className="heart_h2">Only fresh and French products</h2>
        </div>
      </div>
    </div>
  );
}

export default Heart;
