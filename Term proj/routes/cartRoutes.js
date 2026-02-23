const express = require("express");
const router = express.Router();
const products = require("../data/products.json");

/* VIEW CART */
router.get("/cart", (req, res) => {
  const cart = req.session.cart || [];
  res.render("cart", { cart });
});

/* ADD TO CART */
router.post("/cart/add/:id", (req, res) => {

  const productId = parseInt(req.params.id);

  const product = products.find(p => p.id === productId);

  if (!req.session.cart) {
    req.session.cart = [];
  }

  req.session.cart.push(product);

  res.redirect("/cart");
});

module.exports = router;