import React from "react";
import "./TitleHeader.css";
import person from "../../../assets/title-header/person.png";
import cart from "../../../assets/title-header/cart.png";

function TitleHeader() {
  return (
    <div>
      <div className="title">
        <div className="left_block">
          <h2>yellowkitchen</h2>
          <div className="yellow"></div>
        </div>
        <div className="line"></div>
        <div className="right_block">
          <div className="log_in">
            <img src={person} alt="" />
            <h2 className="log_in_h2">Log in</h2>
          </div>
          <div className="cart">
            <img src={cart} alt="" />
            <div className="cart_quantity">0</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleHeader;
