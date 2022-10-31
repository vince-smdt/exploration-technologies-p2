const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title: String,
  category: String,
  description: String,
  created: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Product", productSchema);
