/**
 * Created by yb
 */
const fs = require("fs");
fs.writeFile("bar.txt", "你好", {flag: "a", encoding: "UTF-8"}, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("success");
});
