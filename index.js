let http = require("http");

//test for å fortelle hvor man henter 'static files', som kan være CSS, JS og bilder

app.use(express.static("images"));
app.use(express.static("css"));

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
  } else if (url == "/checkout") {
    lastfil(response, "Checkout/checkout.html");
  } else if (url == "/hage") {
    lastfil(response, "Hage/hage.html");
  } else if (url == "/kontakt") {
    lastfil(response, "Kontakt/index.html");
  } else if (url == "/mennesker") {
    lastfil(response, "Mennesker/index.html");
  } else if (url == "/olje") {
    lastfil(response, "Olje/olje.html");
  } else if (url == "/omoss") {
    lastfil(response, "Omoss/omoss.html");
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
