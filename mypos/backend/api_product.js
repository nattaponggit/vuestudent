const express = require("express");
const router = express.Router();

router.get("/product",(req,res,next)=>{
    next();
}, (req, res) => {
  res.json({ result: "product successfully" });
});

module.exports = router;
