import express from 'express';
import bodyParser from 'body-parser';
import { body, validationResult } from 'express-validator';

const app = express();
const PORT = 3000;

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get("/" , (req, res) => {
  //res.json({ message: 'Welcome to the Product API' });
  // return "<p>hello world</p>"
  console.log(req.body);
  const homePage = { id: 1, name: 'This is the homepage', price:12}
  res.send(`${homePage.name} --> ${homePage.id}`);
})

// Get list of products
app.get('/products', (req, res) => {
  res.json(products);
});

// Create a new product with validation
app.post('/products',
  // Validation middleware
  [
    body('name').isString().withMessage('Name must be a string'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, price } = req.body;
    const newProduct = {
      id: products.length + 1,
      name,
      price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
