import dotenv from "dotenv";
import { MongoClient } from 'mongodb';
 
dotenv.config();
const uri =  process.env.DB || "";

const client = new MongoClient(uri);

console.log(client.db("blog"))


