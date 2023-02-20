import React from "react";
import "./Instagram.css";
import Title from "./InstagramTitle/Title";
import Picture from "./InstagramPicture/Picture";

function Instagram() {
  return (
    <div>
      <div className="instagram">
        <Title />
        <Picture />
      </div>
    </div>
  );
}

export default Instagram;
