import React, { useState } from "react";
import "./Specialities.css";
import Special from "../Specialities/SpecialTitle/Special/Special";
import Button from "../Specialities/SpecialTitle/Button/Button";
import FoodList from "../Specialities/FoodList/FoodList";
import { clsx } from "clsx";
import MenuList from "./MenuList/MenuList";

function Specialities() {
  const [showList, setShowList] = useState(false);
  return (
    <div>
      <div className="special">
        <div className="menu_list">
          <MenuList />
        </div>
        <div className="special_title">
          <Special />
          <Button showList={showList} setShowList={setShowList} />
        </div>
        <div
          className={clsx("showListClass", {
            ["showListActive"]: showList,
          })}
        >
          <FoodList />
        </div>
      </div>
    </div>
  );
}

export default Specialities;
