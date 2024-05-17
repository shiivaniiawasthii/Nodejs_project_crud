const express = require("express");
const path = require("path");
const rootpath = require("../utils/path");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootpath, "views", "user.html"));
});

module.exports = router;
