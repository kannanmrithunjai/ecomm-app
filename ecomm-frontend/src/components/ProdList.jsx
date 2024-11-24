//Imports Libraries and Dependencies
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Imports API Call
import { getProducts } from "../services/getProductService"; //imports the API Call service to retrieve all products
import { addToCart, getFromCart } from "../services/cartService"; //imports the API Call service to retrieve cart products and to add product to cart

//Imports Components
import ProdItem from "./ProdItem";
import CartBtn from "./CartBtn";

//Imports StyleSheet
import "./../styles/ProdList.css";

const ProdList = () => {
  const [prod, setprod] = useState([]);
  const [prodCount, setcnt] = useState(0);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const retrieveProd = async () => {
      try {
        const ProdData = await getProducts(category, price);
        setprod(ProdData);
        const cartData = await getFromCart();
        setcnt(cartData.cartCount || 0);
      } catch (error) {
        console.log("Error in Retrieving Product or Cart Data");
      }
    };

    retrieveProd();
  }, [category, price]);

  //adding product to cart
  const handleBuyNow = async (prod_id) => {
    try {
      const res = await addToCart(prod_id);
      setcnt((prev) => prev + 1);
      alert(`Item added to cart!`);
    } catch (error) {
      console.status(500).message("Error in adding product to cart");
    }
  };

  const cartClick = () => {
    navigate("/cart"); //Navigates to Cart Page
  };

  return (
    <div>
      <CartBtn prodCount={prodCount} onCartClick={cartClick} />

      <header className="header">
        <h1>Online Store</h1>
      </header>

      <div className="filter">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Winter Wear">Winter Wear</option>
          <option value="Casual Wear">Casual Wear</option>
          <option value="Accessories">Accessories</option>
        </select>
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="">Filter by Price</option>
          <option value="lowtohigh">Low to High</option>
          <option value="hightolow">High to Low</option>
        </select>
      </div>

      <div className="ProdList">
        {prod.map((product) => {
          return (
            <ProdItem
              key={product.prod_id}
              product={product}
              onBuyClick={handleBuyNow}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProdList;
