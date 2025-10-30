const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let path = "./index.html";
  switch (req.url) {
    case "/about":
      path = "./about.html";
      break;
    case "/contact-me":
      path = "./contact-me.html";
      break;
  }
  if(req.url!==  "/about" && req.url!==  "/contact-me" && req.url!==  "/" )
  {
    path = './404.html'
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      throw err;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(8000);

