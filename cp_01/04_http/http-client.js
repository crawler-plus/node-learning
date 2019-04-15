/**
 * Created by yb
 */
const http = require("http");
http.get("http://www.baidu.com/", res => {
    if (res.statusCode = 200) {
        let data = [];
        res.on('data', chunk => data.push(chunk));
        res.on('end', () => {
            let buf = Buffer.concat(data);
            console.log(buf.toString('utf-8'));
        });
    }
})