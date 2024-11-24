import axios from "axios";
import { getProductsURL } from "./url";

export const getProducts = async (category, price) => {
  try {
    const res = await axios.get(getProductsURL, {
      params: { category: category || undefined, price: price || undefined },
    });
    return res.data;
  } catch (error) {
    console.error("Error in retriving Products");
    return [];
  }
};
