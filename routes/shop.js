const express = require("express");
const path = require("path");

const adminData = require("./admin");
const product_copy=adminData.products;
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render('shop',{title:'Shop',prods:product_copy, path:"/"});
});


module.exports = router;
