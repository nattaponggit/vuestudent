const express = require("express");
const router = express.Router();
const Trans = require("./models/trans_schema");
const jwt = require("./jwt");

router.get("/transaction", (req, res) => {
  Trans.aggregate([
    {$lookup: {
      from: "users",
      localField: "staff_id",
      foreignField: "_id",
      as: "staff"
    }},    
  ])
});

router.post("/transaction", jwt.verify, async (req, res) => {
  req.body.staff_id = req.userId;
  console.log(JSON.stringify(req.body));
  const doc = await Trans.create(req.body);
  res.json({ result: "ok", doc });
});

module.exports = router;
