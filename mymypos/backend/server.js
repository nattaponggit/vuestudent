// npx nodemon server.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/register", (req, res)=>{
    res.json(req.body)
})

app.listen(8081, () => {
  console.log("server is running.");
});
