const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.json({ result: "register successfully" });
});

module.exports = router;
