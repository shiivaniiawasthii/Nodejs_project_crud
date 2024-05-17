const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const path = require("path");
const rootpath = require("./utils/path");

const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");

const app = express();

app.use(cors());

app.set("view engine", "ejs");

app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(userRoute);

app.use("/admin", adminRoute.router);

app.use((req, res, next) => {
  res
    .status(404)
    .render("404page", { pageTitle: "Page Not Found", path: req.path });
});

app.listen(3000);
