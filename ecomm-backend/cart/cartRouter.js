const { getCurrentCartState, addProductInCart } = require("./cartController");

const router = require("express").Router();

router.get("/", getCurrentCartState); //Returns Shopping Cart current State
router.post("/", addProductInCart); // Adds Product to Cart

module.exports = router;
