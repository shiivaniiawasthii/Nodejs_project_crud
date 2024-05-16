const fs = require("fs");

const routeHandler = (req, res) => {
  if (req.url === "/") {
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
  }
  if (req.url === "/message" && req.method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("location", "/");
      res.end();
    });
  }
};
module.exports = routeHandler;
