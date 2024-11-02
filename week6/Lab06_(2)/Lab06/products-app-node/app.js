import express from 'express';
import dotenv from "dotenv" ;
import bodyParser from 'body-parser';
import { body, validationResult } from 'express-validator';
import { MongoClient } from 'mongodb';
import cors from 'cors'; 
// import db from './db/db.js'

dotenv.config();

const app = express();
const PORT = 3000;

const uri = process.env.DB || ""; // Please update this URI from your atlas account 
const client = new MongoClient(uri);

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// Get list of products
app.get('/products', async (req, res) => {
  let products = [];
   try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Confirm connection
    console.log('Connected to MongoDB');

    // Specify database and collection
    const database = client.db('productApp');
    const collection = database.collection('products');

    // Fetch all products
    products = await collection.find({}).toArray();

    // Log the list of products
    console.log('List of Products:', products);
    res.json(products);
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  } finally {
    // Close the connection
    await client.close();
  }

});

// Create a new product with validation
app.post('/products',
  // Validation middleware
  [
    body('name').isString().withMessage('Name must be a string'),
    body('description').isString().withMessage('Description must be a string'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, price } = req.body;
    const newProduct = {
      name,
      description,
      price
    };
    
    try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Confirm connection
    console.log('Connected to MongoDB');

    // Specify database and collection
    const database = client.db('productApp');
    const collection = database.collection('products');

    // Example operation (insert a document)
    const result = await collection.insertOne(newProduct);
    console.log('Document inserted with _id: ', result.insertedId);

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  } finally {
    // Close the connection
    await client.close();
  }
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
