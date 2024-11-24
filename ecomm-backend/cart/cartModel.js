const products = require("../data/productCatalogue");

let cart = [];

module.exports = {
  addProductInCart: (product) => {
    try {
      cart.push(product);
      return cart;
    } catch (error) {
      throw new Error("Failed to Add product in Cart");
    }
  },

  getCurrentCartState: async () => {
    try {
      let totalPrice = 0;
      let cartCount = 0;
      let UniqueCart = [];

      for (let i = 0; i < cart.length; i++) {
        let existingProduct = null;

        for (let j = 0; j < UniqueCart.length; j++) {
          if (UniqueCart[j].prod_id === cart[i].prod_id) {
            existingProduct = UniqueCart[j];
            break;
          }
        }

        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          const newProduct = { ...cart[i], quantity: 1 };
          UniqueCart.push(newProduct);
        }
      }

      for (let i = 0; i < UniqueCart.length; i++) {
        totalPrice += UniqueCart[i].quantity * UniqueCart[i].price;
        cartCount += UniqueCart[i].quantity;
      }

      return {
        cart: UniqueCart,
        totalPrice: totalPrice,
        cartCount: cartCount,
      };
    } catch (error) {
      throw new Error("Failed to retrieve the cart");
    }
  },

  getProdById: (prod_id) => {
    let product = null;
    for (let i = 0; i < products.length; i++) {
      if (products[i].prod_id == prod_id) {
        product = products[i];
        break;
      }
    }
    return product;
  },
};
