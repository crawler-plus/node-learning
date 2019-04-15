/**
 * Created by yb
 */
function myIter(array) {
    this.array = array;
}

myIter.prototype[Symbol.iterator] = function () {
    let index = 0;
    const next = () => {
        if (index < this.array.length) {
            return {
                value: this.array[index++],
                done: false
            };
        } else {
            return {value: undefined, done: true};
        }
    };
    return {next: next};
}

const myIter = new myIter(["a", "b"]);
let i;
for (i of myIter) {
    console.log(i);
}


let obj = {
    data: ['hello', 'world'],
    [Symbol.iterator]() {
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    };
                } else {
                    return {value: undefined, done: true};
                }
            }
        };
    }
};
for (i of obj) {
    console.log(i);
}