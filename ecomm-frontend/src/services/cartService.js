import axios from "axios";
import { cartURL } from "./url";

//function to add product to cart
export const addToCart = async (prod_id) => {
  try {
    const res = await axios.post(cartURL, { prod_id });
    return res.data;
  } catch (error) {
    console.error("Error in adding product to cart");
    return [];
  }
};

//function to retrieve from cart
export const getFromCart = async () => {
  try {
    const res = await axios.get(cartURL);
    return res.data;
  } catch (error) {
    console.error("Error retrieveing from cart");
    return [];
  }
};
