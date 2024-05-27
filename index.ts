const functions = require("@google-cloud/functions-framework");
const express = require("express");
const app = express();

app.get("/test", (req: any, res: any) => {
  res.json("Made it to test");
});
app.get("/test1", (req: any, res: any) => {
  res.json("Made it to test 1000!!!");
});

// // Register an HTTP function with the Functions Framework
// functions.http("myHttpFunction", (req, res) => {
//   // Your code here

//   // Send an HTTP response
//   // Set CORS headers for preflight requests
//   // Allows GETs from any origin with the Content-Type header
//   // and caches preflight response for 3600s

//   res.set("Access-Control-Allow-Origin", "*");

//   if (req.method === "OPTIONS") {
//     // Send response to OPTIONS requests
//     res.set("Access-Control-Allow-Methods", "GET");
//     res.set("Access-Control-Allow-Headers", "Content-Type");
//     res.set("Access-Control-Max-Age", "3600");
//     res.status(204).send("");
//   } else {
//     res.send("Hello World!");
//   }
// });
// Register an HTTP function with the Functions Framework
functions.http("myHttpFunction", app);
