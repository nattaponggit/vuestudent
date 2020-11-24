// npx nodemon server.js

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("I am root");
});

app.get("/login", (req, res) => {
  res.json(req.query);
});

app.get("/register/:username/:password", (req, res) => {
  res.json(req.params);
});

app.listen(3000, () => {
  console.log("server is running.");
});
