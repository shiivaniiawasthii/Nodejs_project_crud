const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(`<form action='/admin/add-product' method='POST'>
<input type='text' placeholder='Add your product...'/>
<button type='submit'>Add</button>
</form`);
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body, "hjhg");
  res.redirect("/");
});

module.exports = router;
