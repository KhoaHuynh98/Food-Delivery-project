import React from "react";
import "./TitleHeader.css";
import person from "../../../assets/title-header/person.png";
import ModalCart from "../../Modal/Modal";
import CartIcon from "./CartIcon/CartIcon";
import { useSelector } from "react-redux";
import { cartSelector } from "../../../redux/selector";
import DarkMode from "./DarkMode/DarkMode";

function TitleHeader() {
  const productCartStore = useSelector(cartSelector);
  console.log(productCartStore);
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
          <ModalCart>
            <CartIcon />
          </ModalCart>
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleHeader;
