var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
  switch (url.parse(req.url).pathname) {
    case "/nas":
      res.writeHead(301, { Location: "https://kubiksamek.cz:50002" });
      break;

    case "/plex":
      res.writeHead(301, { Location: "https://app.plex.tv" });
      break;

    case "/transmission":
      res.writeHead(301, { Location: "http://kubiksamek.cz:50010" });
      break;

    case "/myjd":
      res.writeHead(301, { Location: "https://my.jdownloader.org" });
      break;

    case "/makemkv":
      res.writeHead(301, { Location: "https://kubiksamek.cz:50030" });
      break;

    case "/mkvtoolnix":
      res.writeHead(301, { Location: "https://kubiksamek.cz:50040" });
      break;

    case "/jdownloader":
      res.writeHead(301, { Location: "https://kubiksamek.cz:50050" });
      break;

    case "/homebridge":
      res.writeHead(301, { Location: "http://kubiksamek.cz:50060" });
      break;

    case "/grafana":
      res.writeHead(301, { Location: "http://kubiksamek.cz:50070" });
      break;

    default:
      res.writeHead(404);
      res.write(`Chyba ${url.parse(req.url).pathname}`);
      break;
  }
  res.end();
});

server.listen(51001);
