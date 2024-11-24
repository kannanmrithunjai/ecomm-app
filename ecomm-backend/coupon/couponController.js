const { validateCoupon } = require("./couponModel");

module.exports = {
  validateCoupon: async (req, res) => {
    const { code } = req.body;

    try {
      const couponVal = await validateCoupon(code);
      res.status(200).json({ DiscountedTotal: couponVal });
    } catch (error) {
      res.status(500).json({ message: "Error in validating coupon" });
    }
  },
};
