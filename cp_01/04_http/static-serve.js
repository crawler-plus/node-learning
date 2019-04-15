/**
 * Created by yb
 */
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        //如果访问路径是localhost:3000,则显示文件列表
        const fileList = fs.readdirSync("./");
        res.writeHead(200, {"Content-type": "text/plain"});
        //将数组转换为字符串返回
        res.end(fileList.toString());
    } else {
        const path = req.url;
        //在路径字符串前加.表示当前目录,避免在*nix系统下访问”/“文件夹
        fs.readFile("." + path, (err, data) => {
            if (err) {
                //如果该文件不存在，抛出异常
                res.end("Internal Error")
                throw err;
            }
            res.writeHead(200, {"Content-type": "text/plain"})
            res.end(data);
        })
    }
});
const port = 3000;
server.listen(port);
console.log(`Listening on ${port}`);

//处理异常
process.on("uncaughtException", () => {
    console.log("got error");
})

