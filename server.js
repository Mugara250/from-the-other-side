import http from "node:http";

const PORT = 8000;

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;
    response.end("<html><h1>The server is working</h1></html>");
});


server.listen(PORT, "localhost", () => {
    console.log(`Server has started listening on PORT ${PORT}`);
})