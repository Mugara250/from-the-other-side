import http from "node:http";
import { serveStatic } from "./utils/serveStatic.js";

const PORT = 8000;

// const __dirname = process.cwd(); // current working directory
const __dirname = import.meta.dirname; // absolute path of the directory containing the currently opened module
// const __filename = import.meta.filename; // absolute path to the currently opened module

const server = http.createServer(async (request, response) => {
  // response.writeHead(200, "OK", {"content-type": "text/html"});
  await serveStatic(__dirname, request, response);
});

server.listen(PORT, "localhost", () => {
  console.log(`Server has started listening on PORT ${PORT}`);
});
