/**
 * Created by yb
 */
const fs = require("fs");
const readStream = fs.createReadStream("./test.txt", "utf-8");
readStream.on("data", data => {
    console.log(data);
});
readStream.on("close", () => {
    console.log("closed");
});
readStream.on("error", () => {
    console.log("error");
});