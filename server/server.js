const http = require("http");

const requestListener = (req, res) => {
  console.log(req);
};

const server = http.createServer(requestListener);

server.listen(3000);
