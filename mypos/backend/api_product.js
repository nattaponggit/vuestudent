const express = require("express");
const router = express.Router();
const jwt = require("./jwt");
const Products = require("./models/product_schema");
// destructure
const { i1, i2 } = require("./myinterceptors");
// http://localhost:8081/api/v2/product
// http://localhost:8081/api/v2/product?token1=1234&token2=4321

router.get(
  "/product",
  /*jwt.verify,*/ async (req, res) => {
    const doc = await Products.find({});
    res.json(doc);
  }
);

module.exports = router;
