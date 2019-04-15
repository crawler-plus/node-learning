/**
 * Created by yb
 */
const fs = require("fs");
fs.open("foo.txt", 'a', (err, fd) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(fd);
    fs.fstat(fd, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    })
})

