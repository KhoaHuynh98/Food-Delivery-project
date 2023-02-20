import React from "react";
import "../Content/Content.css";

function Content() {
  return (
    <div>
      <div className="nearest_box">
        <div>
          <h1 className="nearest_h1">Your nearest restaurants</h1>
        </div>
        <div className="nearest_content">
          <h2 className="nearest_h2">
            Each kitchen works with its own delivery area to deliver food to you
            as soon as possible
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Content;
