const express = require("express");
const cors = require("cors");
let products = require("./data/products");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.delete("/api/products/:id", (req, res) => {
  const productId = Number(req.params.id);

  const productExists = products.some((product) => product.id === productId);

  if (!productExists) {
    return res.status(404).json({ message: "Product not found" });
  }

  products = products.filter((product) => product.id !== productId);

  res.json({
    message: "Product deleted successfully",
    products,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});