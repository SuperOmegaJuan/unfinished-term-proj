const products = require("../data/products.json");

exports.getProducts = (req, res) => {
  res.render("products", {
    products: products
  });
};

exports.getProduct = (req, res) => {
  const productId = parseInt(req.params.id);

  const product = products.find(p => p.id === productId);

  res.render("products", {
    product: product
  });
};