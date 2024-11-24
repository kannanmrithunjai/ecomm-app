import axios from "axios";
import { coupon } from "./url";

//function to validate coupon
export const validateCoupon = async (code) => {
  try {
    const res = await axios.post(coupon, { code });
    return res.data;
  } catch (error) {
    console.error("Error in validating coupon");
    return [];
  }
};
