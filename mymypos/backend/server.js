// npx nodemon server.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const Users = require("./user_schema");
require("./db");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  try {
    const doc = await Users.create(req.body);
    res.json({status: "ok", message:"Register successfully"});
  } catch (e) {
    res.json({status: "nok", message: JSON.stringify(e)})
  }
});

app.listen(8081, () => {
  console.log("server is running.");
});
