const express = require("express");

const path = require("path");

const rootpath = require("../utils/path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(adminData.products, "in users page");

  res.render("shop", {
    prods: adminData.products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: adminData.products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
