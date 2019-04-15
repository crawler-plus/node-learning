/**
 * Created by yb
 */
const http = require("http")
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello Node!")
});
server.on("connection", (req, res) => {
    console.log("connected");
})
server.on("request", (req, res) => {
    console.log("request");
});
server.listen(3000);


