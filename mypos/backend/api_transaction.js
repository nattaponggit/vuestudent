const express = require("express");
const router = express.Router();
const Trans = require("./models/trans_schema");

router.get("/transaction", (req, res) => {
  res.json({ result: "transaction successfully" });
});

router.post("/transaction", async (req, res) => {
  console.log(JSON.stringify(req.body));
  const doc = await Trans.create(req.body)
  res.json({ result: "ok", doc });
});

module.exports = router;
