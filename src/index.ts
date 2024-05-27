import express, { Express, Request, Response } from "express";
import { MongoClient } from "mongodb";

const app = express();

app.get("/", async (req: Request, res: Response) => {
  const uri = "mongodb://localhost:27018";
  const client = new MongoClient(uri);
  const database = client.db("mydatabase");
  const movies = database.collection("movies");

  const doc = { title: "Back to the Future" };
  const movie = await movies.insertOne(doc);

  res.send("EEExpress + TypeScript Server");
});

app.listen(5001, () => {
  console.log(`[server]: Server is running at http://localhost:5001`);
});
