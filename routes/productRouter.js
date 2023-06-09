const express = require("express");
const { fetchProducts, addProduct } = require("../controllers/productController");
const router = express.Router();

router.get("/", fetchProducts);
router.post("/", addProduct);

module.exports = router;
