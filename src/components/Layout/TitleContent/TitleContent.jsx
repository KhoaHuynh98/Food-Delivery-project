import React from "react";
import "./TitleContent.css";
import logo from "../../../assets/salad.png";
import logo2 from "../../../assets/rucola.png";
import logo3 from "../../../assets/arrow.png";

function TitleContent() {
  return (
    <div className="content">
      <div className="buttons_photos">
        <div className="left_content">
          <div className="main_content">
            <div>
              <h1 className="main_content_intro">Your Food court at home</h1>
            </div>
          </div>
          <button className="title_button">
            <h2>Delivery</h2>
            <h3>Order in</h3>
          </button>
          <button className="title_button">
            <h2>Takeout</h2>
            <h3>Grab and go</h3>
          </button>
        </div>
        <div className="right_content">
          <img src={logo} alt="" className="salad_photo" />
          <img src={logo2} alt="" className="rucola_photo" />
          <div className="photos_description">
            <img src={logo3} alt="" className="arrow" />
            <h2>Fresh salad, Il Pasifigio</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleContent;
