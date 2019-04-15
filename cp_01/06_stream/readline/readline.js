/**
 * Created by yb
 */
const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
    input: fs.createReadStream("./foo.txt")
});

rl.on("line", data => {
    console.log(data);
});

rl.on("close", () => {
    console.log("closed");
})