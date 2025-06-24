npm init -y
npm install express body-parser uuid dotenv
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/products');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const auth = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(logger);
app.use(auth);

// Routes
app.use('/api/products', productsRouter);

// Hello World Route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Global error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
