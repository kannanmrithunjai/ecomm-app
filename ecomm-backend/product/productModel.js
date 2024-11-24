const products = require("../data/productCatalogue");

module.exports = {
  returnFilterProducts: (category, price) => {
    let filterdisplay = products;

    if (category) {
      filterdisplay = filterdisplay.filter(
        (item) => item.category === category
      );
    }

    if (price === "lowtohigh") {
      filterdisplay.sort((a, b) => a.price - b.price);
    } else if (price === "hightolow") {
      filterdisplay.sort((a, b) => b.price - a.price);
    }

    return filterdisplay;
  },
};
