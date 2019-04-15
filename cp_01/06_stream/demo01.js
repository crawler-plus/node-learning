/**
 * Created by yb
 */
require("stream");
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        const fileList = fs.readdirSync("./");
        res.writeHead(200, {"Content-type": "text/plain"});
        res.end(fileList.toString());
    } else {
        const path = "." + req.url;
        try {
            fs.createReadStream(path).pipe(res); // 写入res对象
        } catch (e) {
            res.end("file not exists");
        }

    }
});

const port = 3000;
server.listen(port);
console.log(`Listening on ${port}`);

//处理异常
process.on("uncaughtException", () => {
    console.log("got error");
})

