// controllers/productController.js
const Product = require("../model/productModel");

// Add new product
exports.createProduct = async (req, res) => {
    try {
        const { name, quantity } = req.body;
        const newProduct = new Product({ name, quantity });
        await newProduct.save();
        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// List all products
exports.listProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update product quantity
exports.updateQuantity = async (req, res) => {
    try {
        const { id } = req.params;
        const { number } = req.query;

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { $inc: { quantity: Number(number) } },
            { new: true }
        );

        if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product quantity updated", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
