const express = require('express');
const { v4: uuidv4 } = require('uuid');
const validateProduct = require('../middleware/validateProduct');
let products = require('../models/productData');

const router = express.Router();

// GET all products
router.get('/', (req, res) => {
  let results = [...products];

  // Filtering
  if (req.query.category) {
    results = results.filter(p => p.category === req.query.category);
  }

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const start = (page - 1) * limit;
  const end = page * limit;
  results = results.slice(start, end);

  res.json(results);
});

// GET one product
router.get('/:id', (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return next({ status: 404, message: 'Product not found' });
  res.json(product);
});

// POST new product
router.post('/', validateProduct, (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
router.put('/:id', validateProduct, (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next({ status: 404, message: 'Product not found' });

  products[index] = { id: req.params.id, ...req.body };
  res.json(products[index]);
});

// DELETE product
router.delete('/:id', (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next({ status: 404, message: 'Product not found' });

  products.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
