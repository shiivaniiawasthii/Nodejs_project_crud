const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const path = require("path");

const adminRoute = require("./routes/admin");
const userRoute = require("./routes/user");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(userRoute);

app.use("/admin", adminRoute);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404page.html"));
});

app.listen(3000);
