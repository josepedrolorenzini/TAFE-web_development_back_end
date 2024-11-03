import express from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import {connectDB} from "./db/conn.js";
 
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());


// Middleware to log requests

app.get('/', (req, res) => {
    console.log(req.method, req.url);
    res.send('Hello, World!');
})
app.get('/courses', async (req, res) => {
    console.log(req.method, req.url);
    const db = await connectDB();
    const courses = db.collection("courses");

      // Fetch all documents in the collection
      const dataCourses = await courses.find({}).toArray();
      console.log("List of expenses:", dataCourses);
      res.json(dataCourses);

}) ;


app.post('/addcourse', async (req, res) => {

    const { title, description, category, instructor, duration, level, price, tags, enrollment } = req.body;
    // Validate the required fields
    if (!title || !description || !category || !instructor || !duration || !level || !price || !tags) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const newCourse = {
        title,
        description,
        category,
        instructor,
        duration,
        level,
        price,
        tags,
        enrollment,
        createdAt: new Date()
    };


    try {
        const db = await connectDB();
        const courses = db.collection("courses");
        const newCourse = req.body;

        const result = await courses.insertOne(newCourse);
        console.log("New course added:", result.insertedId);
        res.status(201).json({ id: result.insertedId, ...newCourse });
    } catch (error) {
         console.error(error);
         res.status(500).json({ message: 'Server Error' });
    }
}) ;

app.listen( 5050 , (req, res) => {
    connectDB()
    console.log('Server is running on port http://localhost:5050');
});