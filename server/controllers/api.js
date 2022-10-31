const Product = require('../models/products');

module.exports = class API {
  // fetch all products
  static async fetchAllProduct(req, res) {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  // fetch product by ID
  static async fetchProductByID(req, res) {
    const id = req.params.id;
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  // create a product
  static async createProduct(req, res) {
    const product = req.body;
    try {
      await Product.create(product);
      res.status(201).json({ message: "Product created successfully!" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  // update a product
  static async updateProduct(req, res) {
    const id = req.params.id;
    const newProduct = req.body;

    try {
      await Product.findByIdAndUpdate(id, newProduct);
      res.status(200).json({ message: "Product updated successfully!" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  
  // delete a product
  static async deleteProduct(req, res) {
    const id = req.params.id;
    try {
      const result = await Product.findByIdAndDelete(id);
      res.status(200).json({ message: "Post deleted successfully!" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
