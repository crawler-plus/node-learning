/**
 * Created by yb
 */
const fs = require("fs");
const readFile_promise = function (path) {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (data) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
    return promise;
}

module.exports = readFile_promise;

async function readAsync() {
    await readFile_promise("2.txt").then(res => console.log(res));
}
readAsync()

