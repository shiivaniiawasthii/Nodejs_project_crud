const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/message", (req, res, next) => {
  console.log(req.body, "jhjhghghf");
  console.log(req.body.message, "jhjhghghf");
  const writemessage = req.body.message;
  fs.writeFileSync("message.txt", writemessage);
  res.statusCode = 302;
  res.setHeader("location", "/");
  res.end();
});
app.use("/", (req, res, next) => {
  res.end(
    `<html>
<body>
<form method="POST" action="/message">
<input placeholder="Enter data" name="message"/>
<button type="submit">Send</button>
</form>
</body>
</html>`
  );
});

app.listen(3000);
