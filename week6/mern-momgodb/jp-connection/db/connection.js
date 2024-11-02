const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

// Load environment variables
dotenv.config();

// Connection URL
const url = process.env.mongo_DB || "";
const client = new MongoClient(url);

let db; // This will hold the database instance

async function main() {
    try {
        // Connect to MongoDB server
        await client.connect();
        
        // Get the database instance
        db = client.db("blog"); // Replace "blog" with your database name

        // Optionally ping the database
        await db.command({ ping: 1 });
        console.log("Connected to MongoDB server!");

    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw err; // Re-throw the error to handle it in the caller
    }
}

// Invoke the main function to connect
main().catch(console.error);

// Export the db object for use in other files
module.exports = {
    getDb: () => db, // Use a getter function to return the database instance
    client // You can export the client if you need to use it elsewhere
};
