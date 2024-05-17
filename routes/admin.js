const express = require("express");

const ProductsController = require("../controllers/product");

const router = express.Router();

router.get("/add-product", ProductsController.getAddProduct);

router.post("/add-product", ProductsController.postAddProduct);

module.exports = {
  router: router,
};
