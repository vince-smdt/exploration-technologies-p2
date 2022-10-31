const express = require('express');
const router = express.Router();
const API = require('../controllers/api');

router.get('/', API.fetchAllProduct);
router.get('/:id', API.fetchProductByID);
router.post("/", API.createProduct);
router.patch("/:id", API.updateProduct);
router.delete("/:id", API.deleteProduct);

module.exports = router;