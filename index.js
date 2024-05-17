const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const path = require("path");
const rootpath = require("./utils/path");

const adminRoute = require("./routes/admin");
const userRoute = require("./routes/shop");

const controllers404 = require("./controllers/404");

const app = express();

app.use(cors());

app.set("view engine", "ejs");

app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(userRoute);

app.use("/admin", adminRoute.router);

app.use(controllers404.page404);

app.listen(3000);
