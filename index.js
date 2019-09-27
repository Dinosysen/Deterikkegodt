let http = require("http");
let fs = require("fs");
let path = require("path");

let handleRequest = (req, res) => {
  if (req.url == "/") {
    lastfil(res, "index.html");
  } else if (req.url == "/sparkesykler") {
    lastfil(res, "sparkesykler.html");
  } else if (req.url == "/havfruer") {
    lastfil(res, "havfruer.html");
  } else if (req.url == "/biler") {
    lastfil(res, "biler.html");
  } else if (req.url == "/checkout") {
    lastfil(res, "Checkout/checkout.html");
  } else if (req.url == "/hage") {
    lastfil(res, "hage.html");
  } else if (req.url == "/kontakt") {
    lastfil(res, "Kontakt/index.html");
  } else if (req.url == "/mennesker") {
    lastfil(res, "mennesker/index.html");
  } else if (req.url == "/olje") {
    lastfil(res, "olje/olje.html");
  } else if (req.url == "/omoss") {
    lastfil(res, "Omoss/omoss.html");
  } else if (req.url.match(".html$")) {
    let htmlPath = path.join(__dirname, "/", req.url);
    let fileStream = fs.createReadStream(htmlPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    fileStream.pipe(res);
  } else if (req.url.match(".css$")) {
    let cssPath = path.join(__dirname, "/", req.url);
    let fileStream = fs.createReadStream(cssPath, "UTF-8");
    res.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(res);
  } else if (req.url.match(".png$")) {
    let imagePath = path.join(__dirname, "/", req.url);
    let fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/png" });
    fileStream.pipe(res);
  } else if (req.url.match(".jpg$")) {
    let imagePath = path.join(__dirname, "/", req.url);
    let fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/jpg" });
    fileStream.pipe(res);
  } else if (req.url.match(".gif$")) {
    let imagePath = path.join(__dirname, "/", req.url);
    let fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, { "Content-Type": "image/gif" });
    fileStream.pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("No Page Found");
  }
};
http.createServer(handleRequest).listen(8080);

function lastfil(res, filnavn) {
  let fs = require("fs");
  fs.readFile(filnavn, null, function(error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Whoops! File not found!");
    } else {
      res.write(data);
    }
    res.end();
  });
}
