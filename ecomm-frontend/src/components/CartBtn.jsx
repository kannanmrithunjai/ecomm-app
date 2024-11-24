import React from "react";
import cartbtn from "./../Asset/cartbtn.png";
import "../styles/CartBtn.css";

const CartBtn = ({ prodCount, onCartClick }) => {
  return (
    <button className="CartBtn" onClick={onCartClick}>
      <img src={cartbtn} alt="Cart" />
      {prodCount}
    </button>
  );
};

export default CartBtn;
