const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const adminRoute = require("./routes/adminRoutes/adminRoute");
const userRoute = require("./routes/userRoutes/userRoute");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoute);
app.use("/admin", adminRoute);
app.use((req, res, next) => {
  res.status(404).send(`<h1>Page not found!!!</h1>`);
});

app.listen(3000);
