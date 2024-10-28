import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.DB || "mongodb+srv://joseplorenzini:CRvCmD6hGLaMddA7@cluster0.rtrw8.mongodb.net/employees";
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
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
  console.log(client.db("admin"))
  client.close();
} catch(err) {
  console.error(err);
}

let db = client.db("employees");

export default db;