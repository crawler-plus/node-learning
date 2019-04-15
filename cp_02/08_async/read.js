/**
 * Created by yb
 */
const fs = require("fs");
fs.readFile("3.txt", (err, data) => (fs.readFile("2.txt", (err, data2) => (console.log(data.toString(), data2.toString())))));