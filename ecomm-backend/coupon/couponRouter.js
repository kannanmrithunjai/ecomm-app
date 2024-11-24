const { validateCoupon } = require("./couponController");

const router = require("express").Router();

router.post("/", validateCoupon);

module.exports = router;
