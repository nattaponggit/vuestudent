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

router.post("/product", (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    const doc = await Products.create(fields);
    await uploadImage(files, doc);
    res.json({ result: "ok", message: doc });
  });
});

// destructure
const { i1, i2 } = require("./myinterceptors");
// http://localhost:8081/api/v2/product
// http://localhost:8081/api/v2/product?token1=1234&token2=4321

router.get("/product", jwt.verify, async (req, res) => {
  const doc = await Products.find({}).sort({ created: -1 });
  res.json(doc);
});


// ------------------------------
router.delete("/product/id/:id", jwt.verify, async (req, res) => {
  let doc = await Products.findOneAndDelete({ product_id: req.params.id });
  res.json({ result: "ok", message: doc });
});

router.get("/product/id/:id", jwt.verify, async (req, res) => {
  let doc = await Products.findOne({ product_id: req.params.id });
  res.json(doc);
});

router.put("/product", jwt.verify, async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    console.log(JSON.stringify({ err, fields, files }));
    await Products.findOneAndUpdate({ product_id: fields.product_id }, fields);
    await uploadImage(files, fields);
    res.json({ result: "ok", message: fields });
  });
});

// Get product by keyword
router.get("/product/name/:keyword", async (req, res) => {
  console.log("get products by keyword");
  try {
    var query = { name: new RegExp("^.*" + req.params.keyword + ".*$", "i") };
    let result = await Products.find(query);
    if (result) {
      res.json(result);
    } else {
      res.json([]);
    }
  } catch (error) {
    alert(JSON.stringify(error));
  }
});


module.exports = router;
