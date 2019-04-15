/**
 * Created by yb
 */
const Readable = require('stream').Readable;
const util = require('util');

util.inherits(MyReadable, Readable)

function MyReadable(array) {
    //如果objectMode设置成false在消耗数据时会转换为buffer
    Readable.call(this, {objectMode: true});
    this.array = array;
}

MyReadable.prototype._read = function () {
    if (this.array.length) {
        this.push(this.array.shift());
    } else {
        this.push(null);
    }
}


const array = ['a', 'b', 'c', 'd', 'e'];
const read = new MyReadable(array);

read.on("data", data => {
    console.log(data);
})
read.on("end", () => {
    console.log("end");
})

process.env.TZ = "America/New_York";
const date = new Date();
console.log(date);
