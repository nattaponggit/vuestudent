const express = require("express");
const router = express.Router();

// http://localhost:8081/api/v2/product

const i1 = (req, res, next) => {
  if (req.query.token1 == "1234") {
    next();
  } else {
    res.end("Invalid token1");
  }
};

const i2 = (req, res, next) => {
  if (req.query.token2 == "4321") {
    next();
  } else {
    res.end("Invalid token2");
  }
};

router.get("/product", i1, i2, (req, res) => {
  res.json({ result: "product successfully" });
});

module.exports = router;
