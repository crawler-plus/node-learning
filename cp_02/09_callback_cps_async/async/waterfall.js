/**
 * Created by yb
 */
const async = require("async");
const fs = require("fs");

function func1(callback) {
    fs.readFile("1.txt", "utf-8", callback);
}

function func2(value, callback) {
    console.log("上一个操作传入的值", value);
    fs.readFile("2.txt", "utf-8", callback);
}

function func3(value, callback) {
    console.log("上一个操作传入的值", value);
    fs.readFile("3.txt", "utf-8", callback);
}

async.waterfall([func1, func2, func3], function (err, data) {
    console.log(data);
})