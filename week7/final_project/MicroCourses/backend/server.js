import express from "express";
import coursesRoter from "./routes/courses.js";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import {connectDB} from "./db/conn.js";
 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
 


/// index page 
// app.get('/', (req, res) => {
//     console.log(req.method, req.url);
//     res.send('Hello, World!');
// }) ;

// Middleware to log requests
//courses routes
app.use("/courses", coursesRoter) ;

app.listen( PORT , (req, res) => {
    connectDB()
    console.log('Server is running on port http://localhost:5050');
});