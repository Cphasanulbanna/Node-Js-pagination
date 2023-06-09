const express = require("express");
const router = express.Router();

const { fetchProducts, addProduct } = require("../controllers/productController");

router.get("/", fetchProducts);
router.post("/", addProduct);

module.exports = router;
