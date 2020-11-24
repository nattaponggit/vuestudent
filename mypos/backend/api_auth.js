const express = require("express");
const router = express.Router();
const Users = require("./models/user_schema");
const bcrypt = require("bcryptjs");
const jwt = require("./jwt");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let doc = await Users.findOne({ username });

  if (doc) {
    let isPasswordValid = await bcrypt.compare(password, doc.password);
    if (isPasswordValid) {
      const payload = {
        id: doc._id,
        level: doc.level,
        username: doc.username,
      };

      res.json({ result: "ok", message: "success" });
    } else {
      res.json({ result: "nok", message: "invalid password" });
    }
  } else {
    res.json({ result: "nok", message: "invalid username" });
  }
});

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
