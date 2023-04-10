import React from "react";
import cart from "../../../../assets/title-header/cart.png";

function CartIcon() {
  return (
    <div className="cart">
      <img src={cart} alt="" />
      <div className="cart_quantity">0</div>
    </div>
  );
}

export default CartIcon;
