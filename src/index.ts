import express, { Express, Request, Response } from "express";

const app = express();

app.get('/', (req, res) => {
  res.send('EEExpress + TypeScript Server');
});

app.listen(5001, () => {
  console.log(`[server]: Server is running at http://localhost:5001`);
});