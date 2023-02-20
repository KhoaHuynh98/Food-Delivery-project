import React from "react";
import "./TitleContent.css";
import logo from "../../../assets/salad.png";
import logo2 from "../../../assets/rucola.png";
import logo3 from "../../../assets/arrow.png";

function TitleContent() {
  return (
    <div className="content">
      <div className="main_content">
        <div>
          <h1 className="main_content_intro">Your Food court at home</h1>
        </div>
      </div>
      <div className="two_buttons">
        <button className="title_content_button">
          <h2>Delivery</h2>
          <h3>Order in</h3>
        </button>
        <button className="title_content_button">
          <h2>Takeout</h2>
          <h3>Grab and go</h3>
        </button>
      </div>
      <div className="main_content_photos">
        <div>
          <img src={logo} alt="" className="salad_photo" />
        </div>
        <div>
          <div>
            <img src={logo2} alt="" className="rucola_photo" />
          </div>
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
