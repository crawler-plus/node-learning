/**
 * Created by yb
 */
const myReadFile = require("./readFile_promise");

myReadFile("./foo.txt").then(value => {
    console.log(value.toString());
    return myReadFile("bar.txt")
}).then(value => {
    console.log(value.toString());
    return myReadFile("baz.txt")
}).then(value => {
    console.log(value.toString());
});



