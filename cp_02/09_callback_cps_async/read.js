/**
 * Created by yb
 */
const fs = require("fs");

function read(path) {
    fs.readFile(path, {encoding: "utf-8"}, (err, data) => {
        console.log(data);
    })
}

read("1.txt");
read("2.txt");
read("3.txt");




