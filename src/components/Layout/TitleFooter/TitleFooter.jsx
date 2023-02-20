import React from "react";
import "./TitleFooter.css";
import Time from "../TitleFooter/Time/Time";
import Delivery from "../TitleFooter/Delivery/Delivery";
import Heart from "../TitleFooter/Heart/Heart";

function TitleFooter() {
  return (
    <div>
      <div className="title_footer">
        <Time />
        <Delivery />
        <Heart />
      </div>
    </div>
  );
}

export default TitleFooter;
