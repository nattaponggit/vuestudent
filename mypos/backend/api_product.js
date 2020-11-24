const express = require("express");
const router = express.Router();

// http://localhost:8081/api/v2/product
router.get(
  "/product",
  (req, res, next) => {
    next();
  },
  (req, res) => {
    res.json({ result: "product successfully" });
  }
);

module.exports = router;
