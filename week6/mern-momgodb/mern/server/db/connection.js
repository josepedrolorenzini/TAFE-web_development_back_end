import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.DB || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  let someCollection = await client.db
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
   await  console.log(process.env.DB);
 // client.close();
} catch(err) {
  console.error(err);
}

let db = client.db("employees");

export default db;