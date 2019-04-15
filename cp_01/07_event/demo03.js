/**
 * Created by yb
 */
const fs = require("fs");
const EventEmitter = require('events').EventEmitter;
const event = new EventEmitter();
//如果该文件不存在，将会尝试创建它
fs.writeFile("./test.txt", "Hello Node", {flag: "a", encoding: "utf8"}, err => {
    if (err) {
        throw err;
    }
    event.emit("done");
});

event.on("done", () => {
    fs.readFile("test.txt", (err, data) => {
        if (err) throw err;
        console.log(data.toString());
    });
});




