import express from "express";
import {connectDB} from "../db/conn.js";
import bodyParser from 'body-parser';
import { body, validationResult } from 'express-validator';
import { ObjectId } from 'mongodb';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fileUpload from 'express-fileupload';
import path from 'path';

// Middleware to log requests
const router = express.Router();

// Get the current directory of this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware to use cors

 
// router.use(bodyParser.json());
// router.use(express.json());
// router.use(fileUpload());
router.use(fileUpload({
    createParentPath: true,
    limits: { 
      fileSize: 5 * 1024 * 1024 // 5 MB max file size
    },
  }));
router.use(cors());

// Import the controllers

router.get('/', async (req, res) => {
    console.log(req.method, req.url);
    const db = await connectDB();
    const courses = db.collection("courses");

      // Fetch all documents in the collection
      const dataCourses = await courses.find({}).toArray();
      console.log("List of expenses:", dataCourses);
      res.json(dataCourses);

}) ;

router.get('/:id', async (req, res) => {
    try {

    const db = await connectDB();
    const courses = db.collection("courses");
    const courseId = req.params.id;
    const course = await courses.findOne({ _id:new  ObjectId(courseId) });
    if (course) {
        res.json(course);
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
    
   // res.json({"user" :req.params.id})
})



router.post('/addcourse', async (req, res) => {
    try {
        const { title, description, category, duration_hours, instructor, level, price } = req.body;

        //getting upload image
        const image = req.files?.image; // Check if file is provided
       
        if (!image) {
            console.log(req.files)
            return res.status(400).json({ message: 'No file uploaded' });
        }

        //triming image 
        const UFileName = `${new Date().getTime()}-${image.name.replaceAll(" ", "-")}`;

        // Validate required fields
        if (!title || !description || !category || !duration_hours || !instructor || !level || !price || !image) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Upload the image
        const uploadPath = path.join(__dirname, 
             "../../frontend/public/uploads",
           // "../uploads",
             UFileName);
        await image.mv(uploadPath);

        const newCourse = {
            title,
            description,
            category,
            duration_hours,
            instructor,
            level,
            price,
            image: `/public/uploads/${UFileName}` 
        };

        const db = await connectDB();
        const courses = db.collection("courses");
        const result = await courses.insertOne(newCourse);
        console.log("New course added:", result.insertedId);

        res.status(201).json({ id: result.insertedId, ...newCourse });
    } catch (error) {
        console.error('Error adding course', error);
        res.status(500).json({ message: 'Server Error' });
    }
});



export default router;