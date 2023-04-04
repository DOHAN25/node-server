var http = require("http");
var hostname = "127.0.0.1";
var port = 8080;

const server = http.createServer(function (req, res) {
  //console.log("REQUEST : ", req);

  // 서버에서 보내주는 값
  //res.end("Hello Client");

  const url = req.url;
  const method = req.method;
  if (path == "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const products = JSON.stringify([
        {
          name: "농구공",
          price: 5000,
        },
      ]);
      res.end(products);
    } else if (method === "POST") {
    }
  }
});

// 요청을 기다리고 있겠다
server.listen(port, hostname);

console.log("server on!");
