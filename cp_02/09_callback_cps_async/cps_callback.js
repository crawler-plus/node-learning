/**
 * Created by yb
 */
const fs = require("fs");

function callback1(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        fs.readFile("1.txt", {encoding: "utf-8"}, callback2);
    }
}

function callback2(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        fs.readFile("2.txt", {encoding: "utf-8"}, callback3);
    }
}

function callback3(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

fs.readFile("3.txt", {encoding: "utf-8"}, callback1);