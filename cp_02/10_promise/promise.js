/**
 * Created by yb
 */
const readFile_promise = require("./readFile_promise");
const promises = ["foo.txt", "bar.txt", "baz.txt"].map(path => readFile_promise(path));

Promise.all(promises).then(results => {
    console.log(results); //results的内容是文本文件内容的顺序排列
}).catch(err => {
});

function timeout(msg) {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000, msg);
    });
}

timeout(1000).then(() => new Promise((resolve) => {
    setTimeout(resolve, 1000, '1000ms passed');
})).then(value => {
    console.log(value); // 1000ms passed
});

const promise = new Promise((resolve, reject) => {
    console.log('begin');
    resolve();
});

setTimeout(() => {
    promise.then(() => {
        console.log('end');
    })
}, 5000);


