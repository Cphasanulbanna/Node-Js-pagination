const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 5005;
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));
