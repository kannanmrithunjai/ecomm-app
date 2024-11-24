const {
  addProductInCart,
  getCurrentCartState,
  getProdById,
} = require("./cartModel");

module.exports = {
  addProductInCart: async (req, res) => {
    const { prod_id } = req.body;

    try {
      const product = await getProdById(prod_id);
      const cartInfo = await addProductInCart(product);
      res.status(200).json({ Cart: cartInfo });
    } catch (error) {
      res.status(500).json({ message: "Error in Adding Product" });
    }
  },

  getCurrentCartState: async (req, res) => {
    try {
      const cart = await getCurrentCartState();

      if (cart.length === 0) {
        res.status(200).json({ message: "No Items in Cart" });
      } else {
        res.status(200).json(cart);
      }
    } catch (error) {
      res.status(500).json({ message: "Failed in Returning cart" });
    }
  },
};
