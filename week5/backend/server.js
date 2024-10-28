// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// middleware
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const main = async () =>{

    try {

        // MongoDB connection
        await mongoose.connect(process.env.DB).then(() => 
            console.log('Connected to MongoDB') )
        .catch(err => console.error(`Error connecting ${err.message}`));
        
        // User schema and model
        const userSchema = new mongoose.Schema({
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
            createdAt:Date,
        }) ;

        const User = mongoose.model('user', userSchema , 'user' );

        //console.log(User)

                // User registration endpoint
        app.post('/api/register', async (req, res) => {
            const { email, password } = req.body;

            try {
                const hashedPassword = await bcrypt.hash(password, 10);
                const user = new User({ email, password: hashedPassword });
                await user.save();
                res.status(201).send('User registered');
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });

        // User login endpoint
        app.post('/api/login', async (req, res) => {
            const { email, password } = req.body;

            try {
                const user = await User.findOne({ email });
                if (!user) {
                    return res.status(400).json({ message: 'Invalid credentials' });
                }

                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    return res.status(400).json({ message: 'Invalid credentials' });
                }

                const token = jwt.sign({ userId: user._id }, process.env.JWTPRIVATEKEY, { expiresIn: '1h' });
                res.json({ token });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });


        app.get("/" , async(req,res) => {

            console.log(User)
            res.json({
                name:"mongoose.connection"
            })
        })


       // API endpoint to get all users
        app.get("/api/users" , async (req,res)=>{

            try {

                const users = await User.find() ;
                 await User.create({
                    firstName: "John",
                    lastName: "Doe",
                    email: "johndoe@example.com",
                    password: "password123",

                 }) ; 
                console.log(users)
                res.json({
                    name:"mongoose.connection" ,
                    users: users
                })
            } catch (error) {
                res.status(500).json({ message: error.message });

            }

        }) ;



    } catch (error) {
        console.error(error.message);
        app.get("/" , (req,res)=>{
            res.json({
                name:"mongoose.connection error"
            })
        })

    }

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

}



main().catch(err => console.log(err));
