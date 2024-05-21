const express = require("express");

const bodyParser = require("body-parser");

const path = require("path");

const adminRoute = require("./routes/admin");
const userRoute = require("./routes/shop");

const controllers404 = require("./controllers/404");

const sequelize = require("./utils/database");

const app = express();

app.set("view engine", "ejs");

app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(userRoute);

app.use("/admin", adminRoute.router);

app.use(controllers404.page404);

sequelize
  .sync()
  .then((res) => {
    app.listen(3001);
  })
  .catch((err) => console.log(err, "err"));
