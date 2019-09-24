let http = require("http");

let handleRequest = (request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  let url = request.url;
  if (url == "/") {
  } else if (url == "/sparkesykler") {
    lastfil(response, "sparkesykler.html");
  } else if (url == "/havfruer") {
    lastfil(response, "havfruer.html");
  } else if (url == "/biler") {
    lastfil(response, "biler.html");
  } else {
    response.write("<h1>Ikke implementert</h1>");
  }
};

http.createServer(handleRequest).listen(8080);

function lastfil(response, filnavn) {
  let fs = require("fs");
  fs.readFile(filnavn, null, function(error, data) {
    if (error) {
      response.writeHead(404);
      respone.write("Whoops! File not found!");
    } else {
      response.write(data);
    }
    response.end();
  });
}
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
