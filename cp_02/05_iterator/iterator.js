/**
 * Created by yb
 */
const arr = [1, 2, 3];
console.log(arr[Symbol.iterator]);//[Function: values]

const set = new Set([1, 2, 3]);
console.log(set[Symbol.iterator]);//[Function: values]

const map = new Map([
    ["a", 1],
    ["b", 2],
]);
console.log(map[Symbol.iterator]);//[Function: entries]

const str = "Hello Node";
console.log(str[Symbol.iterator]);//[Function: [Symbol.iterator]]

const obj = {};
console.log(obj[Symbol.iterator]);//undefined，普通对象没有iterator接口

const Iter = {
    [Symbol.iterator]: function () {
        let i = 0;
        return {
            next: function () {
                return ++i;
            }
        };
    }
};
console.log(Iter[Symbol.iterator]);//[Function: [Symbol.iterator]]




