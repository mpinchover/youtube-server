import express, { Express, Request, Response } from "express";
import { MongoClient } from "mongodb";
import {
  createUserPreferences,
  getAllUserPreferences,
} from "./storage/storage";
import { v4 as uuidv4 } from "uuid";

require("dotenv").config();

const app = express();

app.get("/", async (req: Request, res: Response) => {
  const prefs = {
    uuid: uuidv4(),
    genderPreference: "man",
    maxAge: 30,
    minAge: 30,
  };
  await createUserPreferences(prefs)
    .then((result) => res.json(result))
    .catch((e) => res.json({ msg: e.error() }));
});

app.get("/docs", async (req: Request, res: Response) => {
  await getAllUserPreferences()
    .then((result) => res.json(result))
    .catch((e) => res.json({ msg: e.error() }));
});

app.listen(5001, () => {
  console.log(`[server]: Server is running at http://localhost:5001`);
});
