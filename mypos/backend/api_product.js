const express = require("express");
const router = express.Router();
const jwt = require("./jwt");
const Products = require("./models/product_schema");
const formidable = require("formidable");
const fs = require("fs-extra");


uploadImage = async (files, doc) => {
  if (files.image != null) {
    var fileExtention = files.image.name.split(".")[1];
    doc.image = `${doc.product_id}.${fileExtention}`;
    var oldpath = files.image.path;
    var newpath = __dirname + "/uploaded/images/" + doc.image;
    if (fs.exists(newpath)) {
      await fs.remove(newpath);
    }
    await fs.move(oldpath, newpath);
    await Products.findOneAndUpdate({ product_id: doc.product_id }, doc);
  }
};


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
