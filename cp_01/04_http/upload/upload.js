/**
 * Created by yb
 */
const http = require("http");
const fs = require("fs");
const formidable = require("formidable");

const server = http.createServer((req, res) => {
    if (req.url == "/upload") {
        switch (req.method) {
            case "POST":
                dealUpload(req, res);
                break;
            case "GET":
                fs.createReadStream("upload.html").pipe(res);
                break;
        }
    }
});

function dealUpload(req, res) {
    const form = new formidable.IncomingForm();//创建Formidable.IncomingForm对象
    form.keepExtensions = true;//保持原有的扩展名
    form.uploadDir = __dirname;//上传目录为当前目录
    form.parse(req, (err, fields, files) => {
        if (err) {
            throw err;
        }
        console.log(fields);//{ submit: 'submit' }
        console.log(files);
        res.writeHead(200, {"content-type": 'text/plain'});
        res.end('upload finished');
    })
}

server.listen(3000);