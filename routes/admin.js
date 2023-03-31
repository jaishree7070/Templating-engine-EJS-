const express = require("express");
const path = require("path");

const router = express.Router();

const products=[];

router.get("/add-product", (req, res, next) => {
  res.render('add-product',{title:"Add-Product-page",path:"/admin/add-product"});
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body.title);
  products.push(req.body.title);
  console.log(products)
  res.redirect("/");
});

module.exports.routes= router;
module.exports.products = products;