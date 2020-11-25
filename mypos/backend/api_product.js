const express = require("express");
const router = express.Router();
const jwt = require("./jwt");
const Products = require("./models/product_schema");
const formidable = require("formidable");
const fs = require("fs-extra");


router.post("/product", (req, res)=>{
  const form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files)=>{
    res.json({err, fields, files})
  })
})

// destructure
const { i1, i2 } = require("./myinterceptors");
// http://localhost:8081/api/v2/product
// http://localhost:8081/api/v2/product?token1=1234&token2=4321

router.get("/product", jwt.verify, async (req, res) => {
  const doc = await Products.find({}).sort({ created: -1 });;
  res.json(doc);
});

module.exports = router;
