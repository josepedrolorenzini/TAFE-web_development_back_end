const express = require('express');
const { getDb, client } = require('./db/connection.js'); // Import the getDb function
const { ObjectId } = require('mongodb'); // Import ObjectId for querying

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const db = getDb(); // Get the database instance
        if (!db) {
            throw new Error("Database not initialized");
        }

        // Access the "posts" collection from the connected database instance
        const dbCollection = db.collection("posts"); 
        const findResult = await dbCollection.find({}).toArray(); // Retrieve all documents
        console.log("All documents in the collection:", findResult);
        res.json(findResult); // Send found documents as JSON
    } catch (err) {
        console.error("Error retrieving documents:", err);
        res.status(500).json({ error: "Failed to retrieve documents" });
    }
});

const port = process.env.PORT || 5555; 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
