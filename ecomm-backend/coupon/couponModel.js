const couponCode = require("../data/couponCode");
const { getCurrentCartState } = require("../cart/cartModel");

module.exports = {
  validateCoupon: async (code) => {
    try {
      let newTotal = 0;
      let discountAmt = 0;
      let couponfound = couponCode.find((codeVal) => codeVal.code === code);

      if (couponfound) {
        let cartData = await getCurrentCartState();
        discountAmt = (couponfound.disc / 100) * cartData.totalPrice;
        newTotal = cartData.totalPrice - discountAmt;
      }
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
