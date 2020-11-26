const express = require("express");
const router = express.Router();
const Trans = require("./models/trans_schema");
const jwt = require("./jwt");

// http://localhost:8081/api/v2/transaction
router.get("/transaction", async (req, res) => {
  const doc = await Trans.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "staff_id",
        foreignField: "_id",
        as: "staff",
      },
    },
    { $unwind: "$staff" },
    { $addFields: { staff_id: "$staff.username" } },
    { $project: { staff: 0 } },
  ]).sort({ timestamp: -1 });

  res.json(doc);
});

router.post("/transaction", jwt.verify, async (req, res) => {
  req.body.staff_id = req.userId;
  console.log(JSON.stringify(req.body));
  const doc = await Trans.create(req.body);
  res.json({ result: "ok", doc });
});

module.exports = router;
