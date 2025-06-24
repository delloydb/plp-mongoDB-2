module.exports = (req, res, next) => {
  const { name, price, category, description, inStock } = req.body;
  if (!name || !description || typeof price !== 'number' || !category || typeof inStock !== 'boolean') {
    return res.status(400).json({ error: 'Validation error: Check product fields' });
  }
  next();
};
