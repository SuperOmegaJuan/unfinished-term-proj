const express = require("express");
const router = express.Router();


const homeController = require("../controllers/homeController");

router.get("/", homeController.getHome);

module.exports = router;

const products = require("../data/products.json");

router.get("/", (req, res) => {
  res.render("home", {
    products
  });
});