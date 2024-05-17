const express = require("express");

const adminData = require("./admin");

const ProductsController = require("../controllers/product");

const router = express.Router();

router.get("/", ProductsController.getProducts);

module.exports = router;
