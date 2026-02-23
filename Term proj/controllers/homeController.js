exports.getHome = (req, res) => {

  const images = [
    "/images/slide1.jpg"
  ];

  res.render("home", { images });

};
const productModel = require("../models/productModel");

exports.getHome = (req, res) => {

  const products = productModel.getAllProducts();

  res.render("home", {
    products,
    user: req.session?.user || null
  });

};