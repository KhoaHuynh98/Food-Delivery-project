import React from "react";
import "./Button.css";

function Button({ setShowList, showList }) {
  return (
    <div>
      <div>
        <button
          onClick={() => setShowList(!showList)}
          className="special_button"
        >
          show all
        </button>
      </div>
    </div>
  );
}

export default Button;
