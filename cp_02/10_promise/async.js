/**
 * Created by yb
 */
const readFile_promise = require("./readFile_promise");

async function readFile() {
    const result1 = await readFile_promise("foo.txt");
    console.log(result1);// I am foo.txt
    const result2 = await readFile_promise("bar.txt");
    console.log(result2);// I am foo.txt
}
readFile();


const obj = {};
obj.func = function () {
    (function () {
        console.log(this)
    })()
}
obj.func();