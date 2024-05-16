const http = require("http");
const fs = require("fs");
const routeHandler = require("./routes/route");

const server = http.createServer(routeHandler);

server.listen(3000);
