const express = require("express");
const router = express.Router();
const productsMocks = require('../utils/mocks/products');


// Listar los productos
router.get("/", function(req, res) {
  res.render("products", { productsMocks });
});

// Listar un solo producto
router.get("/:productId", function(req, res) {
  res.render("productId", { productsMocks });
});

router.post("/", function(req, res) {
  res.render("products", { productsMocks });
});

router.put("/:productId", function(req, res) {
  res.render("productId", { productsMocks });
});

router.delete("/:productId", function(req, res) {
  res.render("productId", { productsMocks });
});


module.exports = router;