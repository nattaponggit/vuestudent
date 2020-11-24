const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    let doc = await Users.create(req.body);
    res.json({ result: "ok", message: doc });
  } catch (error) {
    res.json({ result: "nok", message: error });
  }
});

module.exports = router;
