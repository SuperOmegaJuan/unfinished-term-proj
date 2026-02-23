const products = require("../data/products.json");

function getAllProducts() {
  return products;
}

module.exports = {
  getAllProducts
};