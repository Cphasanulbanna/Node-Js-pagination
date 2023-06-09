const fetchProducts = async (req, res) => {
    res.status(200).json({ message: "Success" });
};

module.exports = { fetchProducts };
