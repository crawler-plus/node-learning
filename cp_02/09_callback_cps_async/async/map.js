/**
 * Created by yb
 */
const async = require("async");
const fs = require("fs");

function myReadFile(path, callback) {
    fs.readFile(path, "utf-8", callback);
}

async.map(['1.txt', '2.txt', '3.txt'], myReadFile, function (err, results) {
    console.log(results);
});