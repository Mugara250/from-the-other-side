import http from "node:http";

const PORT = 8000;

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;
  // response.writeHead(200, "OK", {"content-type": "text/html"});
  response.end("<html><h1>The server is working</h1></html>");
});

const dirname = import.meta.dirname; // absolute path of the directory containing the currently opened module
const filename = import.meta.filename; // absolute path to the currently opened module

server.listen(PORT, "localhost", () => {
  console.log(`Server has started listening on PORT ${PORT}`);
});
