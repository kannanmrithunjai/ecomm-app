const couponCode = require("../data/couponCode");
const { getCurrentCartState } = require("../cart/cartModel");

module.exports = {
  validateCoupon: async (code) => {
    try {
      let cartData = await getCurrentCartState();
      let newTotal = 0;
      let discountAmt = 0;
      couponCode.map((codeVal) => {
        if (codeVal.code == code) {
          discountAmt = (codeVal.disc / 100) * cartData.totalPrice;
          newTotal = cartData.totalPrice - discountAmt;
        }
      });
      // return newTotal;
      return {
        UpdatedTotal: newTotal,
        Discount: discountAmt,
      };
    } catch (e) {
      console.log("Error in computing coupon");
    }
  },
};
