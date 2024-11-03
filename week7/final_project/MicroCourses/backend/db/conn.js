import { MongoClient } from "mongodb";

 

export const connectDB = async () => {
   const url = process.env.MongoDB ;
   const client = new MongoClient(url);


   try {
        const conn = await client.connect(process.env.MongoDB)
        console.log("Successfully connected to MongoDB.");
        const db =  conn.db("tafe");
        return db ;
        // client.close();
   } catch (error) {
      console.error(`Error connecting to MongoDB: ${error.message}`)
      process.exit(1); // 1 means error and 0 means failure
   }
}

