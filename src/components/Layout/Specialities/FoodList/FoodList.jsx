import React, { useState } from "react";
import "./FoodList.css";

import { useEffect } from "react";

function FoodList() {
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("https://fe21-db.vercel.app/restaurant")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
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
