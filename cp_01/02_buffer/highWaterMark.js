/**
 * Created by yb
 */
let rs = require("fs").createReadStream('test.txt', {highWaterMark: 10});
let data = [];
rs.on('data', chunk => data.push(chunk));
rs.on('end', () => {
    let buf = Buffer.concat(data);
    console.log(buf.toString('utf-8'));
});


