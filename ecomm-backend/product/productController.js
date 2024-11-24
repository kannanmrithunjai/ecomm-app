const { returnFilterProducts } = require("./productModel");

module.exports = {
  returnFilterProducts: async (req, res) => {
    const { category, price } = req.query;
    try {
      const filteredProd = await returnFilterProducts(category, price);

      res.status(200).json(filteredProd);
    } catch (error) {
      res.status(500).json({ Message: "Error Occured on retrieving Products" });
    }
  },
};
