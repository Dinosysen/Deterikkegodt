var http = require("http");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write('URL er: "' + req.url + '"');

    let url = req.url;
    if (url == "/") {
      {
        blogginlegg(res);
      }
    } else if (url == "/about") {
      about(res);
    } else {
      res.write("<h1>Ikke implementert</h1>");
    }
    // res.write("Hello World");
    res.end("slutt!");
  })
  .listen(8080);

function about(res) {
  res.write("About this page");
}

function blogginlegg(res) {
  for (let i = 0; i != 6; i++) {
    res.write("<h1>Bloggpost " + i.toString() + "</h1>");
    res.write(
      "<p>lorem ds ds fsdf dsf sfds sf dsf ddsg sgdg sfg fgds kgsdig sgs</p>"
    );
  }
}
