const { returnFilterProducts } = require("./productController");

const router = require("express").Router();

router.get("/", returnFilterProducts); //Returns List of Product

module.exports = router;
