const express = require("express");
const cors = require("cors");

const productRouter = require("./routes/productRouter");
const { connectDb } = require("./config/db");
require("dotenv");

connectDb();
const app = express();

const PORT = 5005;
app.use(cors());
app.use(express.json());

app.use("/api/products/", productRouter);

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));
