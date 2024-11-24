const express = require("express");
const app = express();

const product = require("./product/productRouter");
const cart = require("./cart/cartRouter");
const coupon = require("./coupon/couponRouter");
const announcement = require("./announcement/announcementRouter");

app.use("/products", product); //routes to Products
app.use("/cart", cart); //routes to Cart
app.use("/coupon", coupon); //routes to coupon
app.use("/announcement", announcement); //routes to announcements

module.exports = app;
