import React from "react";
import "./Time.css";
import time from "../../../../assets/time-eat.png";

function Time() {
  return (
    <div>
      <div className="time">
        <div>
          <img src={time} alt="" />
        </div>
        <div>
          <h2 className="time_h2">
            delivery in all paris in less than 30 minutes
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Time;
