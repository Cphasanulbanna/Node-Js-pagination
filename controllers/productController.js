const Product = require("../models/productModel");

const fetchProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (!products.length) {
            return res.status(400).json({ message: "Products not found" });
        }
        return res.status(200).json({ message: "Success****", products: products });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        if (!name || !price || !description) {
            return res.status(400).json({ message: "price , name, description are required" });
        }
        const newProduct = {
            name: name,
            price: price,
            description: description,
        };

        const product = await Product.create(newProduct);
        res.status(201).json({ message: "Success", product: product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { fetchProducts, addProduct };
