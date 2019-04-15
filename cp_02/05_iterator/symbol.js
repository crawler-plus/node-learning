/**
 * Created by yb
 */
const Iter = {
    [Symbol.iterator]: function () {
        return {
            next: function () {
                return {value: 1, done: true};
            }
        };
    }
};

const obj = new Iter[Symbol.iterator]();
console.log(obj.next());