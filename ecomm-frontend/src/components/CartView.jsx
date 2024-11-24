//Imports Libraries and Dependencies
import React from "react";
import { useState, useEffect } from "react";
import "./../styles/CartView.css";

//Imports API Call
import { getFromCart } from "../services/cartService"; //imports the API Call service to retrieve cart products
import { validateCoupon } from "./../services/CouponService"; ////imports the API Call service to validatecoupon

const CartView = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [qtyCount, setqtyCount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [newTotal, settotal] = useState(null);
  const [discount, setdiscount] = useState(null);
  const [Message, setMessage] = useState(null);

  useEffect(() => {
    const getCart = async () => {
      const cartData = await getFromCart();
      setCart(cartData.cart || []);
      setTotalPrice(cartData.totalPrice || 0);
      setqtyCount(cartData.cartCount || 0);
    };

    getCart();
  }, []);

  //sets the coupon code in text box
  const handlecoupon = (e) => {
    setCouponCode(e.target.value);
  };

  //validates coupon
  const checkCoupon = async () => {
    try {
      const res = await validateCoupon(couponCode);
      if (res.DiscountedTotal.UpdatedTotal != 0) {
        settotal(res.DiscountedTotal.UpdatedTotal);
        setdiscount(res.DiscountedTotal.Discount);
        setMessage(null);
      } else {
        setMessage("Invalid Code");
      }
      console.log(res);
    } catch (error) {
      console.log("Error in validating coupon");
    }
  };

  return (
    <div>
      <div className="CartView">
        {cart.length > 0 ? (
          <h1 className="Cartheader">Your Products</h1>
        ) : (
          <h1 className="Cartheader">Cart is empty!</h1>
        )}
        {cart.length > 0 &&
          cart.map((item) => (
            <div className="cartItem" key={item.prod_id}>
              <img src={item.url} alt={item.prod_name} className="cartImage" />
              <div className="cartDetails">
                <h2>{item.prod_name}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
      </div>

      <div className="CartSummary">
        <h3>Cart Summary</h3>
        <h3>Total Items: {qtyCount}</h3>
        <h3>Total Price: ${totalPrice} </h3>
        <div>
          {newTotal != null && <h3>Offer Price: ${newTotal}</h3>}
          {discount != null && <h3>Discount Price: ${discount}</h3>}
        </div>
        <div className="couponCode">
          <label>Coupon Code:</label>
          <input
            type="text"
            id="couponCode"
            value={couponCode}
            onChange={handlecoupon}
            placeholder="Enter Coupon Code"
          />
          <button onClick={checkCoupon}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
