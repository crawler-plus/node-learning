/**
 * Created by yb
 */
const eventEmitter = require("events");
const fs = require("fs");
const myEmitter = new eventEmitter();
let i = 0;
const test = ["test0.txt", "test1.txt", "test2.txt", "test3.txt"];

function read(path) {
    i++;
    fs.readFile(path, (err, data) => {
        console.log(data.toString());
        myEmitter.emit("test");
    })
}

myEmitter.on("test", () => {
    if (i > 3) {
        return;
        process.exit()
    }
    read(test[i])
})

read(test[0])