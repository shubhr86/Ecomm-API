// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

// Route to create a product
router.post("/create", productController.createProduct);

// Route to list all products
router.get("/", productController.listProducts);

// Route to delete a product by ID
router.delete("/:id", productController.deleteProduct);

// Route to update quantity of a product by ID
router.post("/:id/update_quantity", productController.updateQuantity);

module.exports = router;
