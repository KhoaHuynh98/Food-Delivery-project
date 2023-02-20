import React from "react";
import "./FoodList.css";
import bagel from "../../../../assets/food-list/bagel.png";
import burger from "../../../../assets/food-list/burger.png";
import chicken from "../../../../assets/food-list/chicken.png";
import fish from "../../../../assets/food-list/fish.png";
import fishnchips from "../../../../assets/food-list/fishnchips.png";
import pizza from "../../../../assets/food-list/pizza.png";
import vegan from "../../../../assets/food-list/vegan.png";
import raviolli from "../../../../assets/food-list/raviolli.png";

class FoodList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        { id: 1, img: bagel, name: "Bagel" },
        { id: 2, img: burger, name: "Burger" },
        { id: 3, img: chicken, name: "Chicken" },
        { id: 4, img: fish, name: "Fish" },
        { id: 5, img: fishnchips, name: "FishChips" },
        { id: 6, img: pizza, name: "Salads" },
        { id: 7, img: vegan, name: "Pizza" },
        { id: 8, img: raviolli, name: "Pasta" },
      ],
    };
  }

  render() {
    return (
      <div className="food_list">
        {this.state.info.map((item) => {
          return (
            <li key={item.id} className="food_list_item">
              <img src={item.img} alt="" className="food_list_img" />
              <div>
                <h2 className="food_list_name">{item.name}</h2>
              </div>
            </li>
          );
        })}
      </div>
    );
  }
}

export default FoodList;
