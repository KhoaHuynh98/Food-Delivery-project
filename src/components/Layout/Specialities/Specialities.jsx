import React from "react";
import "./Specialities.css";
import Special from "../Specialities/SpecialTitle/Special/Special";
import Button from "../Specialities/SpecialTitle/Button/Button";
import FoodList from "../Specialities/FoodList/FoodList";

function Specialities() {
  return (
    <div>
      <div className="special">
        <div className="special_title">
          <Special />
          <Button />
        </div>
        <FoodList />
      </div>
    </div>
  );
}

export default Specialities;
