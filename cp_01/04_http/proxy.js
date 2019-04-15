/**
 * Created by yb
 */
const http = require("http");
const url = require("url");
http.createServer((req, res) => {
    console.log(req.url);
    const options = url.parse(req.url);
    options.headers = req.headers;
    const proxyRequest = http.request(options, pres => {
        res.writeHead(pres.statusCode, pres.headers);
        pres.on('data', data => {
            res.write(data);
        });
        pres.on('end', () => {
        });
    });

    req.on('data', data => {
        proxyRequest.write(data);
    });

    req.on('end', () => {
        proxyRequest.end();
    });

}).listen(8800);


