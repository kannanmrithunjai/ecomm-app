import React from "react";
import "../styles/ProdItem.css";

const ProdItem = ({ product, onBuyClick }) => {
  return (
    <div className="ProductItem">
      <img className="productImage" src={product.url} alt={"Product Image"} />
      <h2 className="productName">{product.prod_name}</h2>
      <p>Price: ${product.price}</p>
      <button
        className="buyNowButton"
        onClick={() => onBuyClick(product.prod_id)}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProdItem;
