/**
 * Created by yb
 */
const fs = require("fs");
const data = fs.readFileSync("foo.txt", {encoding: "UTF-8"});
console.log(data);