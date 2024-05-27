import { MongoClient } from "mongodb";
require("dotenv").config();

const uri = "mongodb://localhost:27018";
const client = new MongoClient(uri);
const database = client.db("mydatabase");

export { database };
