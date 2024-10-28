require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require('./routes/users');
const authRoutes= require('./routes/auth');


app.use(express.json());
app.use(cors());



// let users = [
//   { id: 1, name: "John Doe", email: "john@example.com" },
//   { id: 2, name: "Jane Doe", email: "jane@example.com" },
// ];

connection();

app.get("/", (req ,res) => {
    res.json({
        message:"welcome to my world!",
        users: users,
    });
})

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port , () => {
    console.log(`Server running on port http://localhost:${port}`);
});