import React, { useState } from "react";
import "./FoodList.css";
import bagel from "../../../../assets/food-list/bagel.png";
import burger from "../../../../assets/food-list/burger.png";
import chicken from "../../../../assets/food-list/chicken.png";
import fish from "../../../../assets/food-list/fish.png";
import fishnchips from "../../../../assets/food-list/fishnchips.png";
import pizza from "../../../../assets/food-list/pizza.png";
import vegan from "../../../../assets/food-list/vegan.png";
import raviolli from "../../../../assets/food-list/raviolli.png";
import { useEffect } from "react";

function FoodList() {
  const [product, setProduct] = useState();
  const info = [
    { id: 1, img: bagel, name: "Bagel" },
    { id: 2, img: burger, name: "Burger" },
    { id: 3, img: chicken, name: "Chicken" },
    { id: 4, img: fish, name: "Fish" },
    { id: 5, img: fishnchips, name: "FishChips" },
    { id: 6, img: pizza, name: "Salads" },
    { id: 7, img: vegan, name: "Pizza" },
    { id: 8, img: raviolli, name: "Pasta" },
  ];
  useEffect(() => {
    fetch("https://fe21-db.vercel.app/restaurant")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <div className="food_list">
        {info.map((item) => {
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
      <div className="show_more">
        {product &&
          product.map((item, index) => {
            return (
              <div className="cardProduct">
                <div className="imgContainer">
                  <img src={item.img} alt="" />
                </div>
                <h3 className="nameProduct">{item.name}</h3>
                <h5 className="priceProduct">{item.price}</h5>
                <button>Add</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default FoodList;
