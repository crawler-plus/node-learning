/**
 * Created by yb
 */
const fs = require("fs");

function readFile_promises(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "UTF-8", (err, data) => {
            if (data) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}
module.exports = readFile_promises;