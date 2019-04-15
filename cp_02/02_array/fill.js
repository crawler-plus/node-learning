/**
 * Created by yb
 */
// ES5
const arr3 = Array.apply(null, new Array(5))
    .map(function () {
        return 0
    });
console.log(arr3);
// ES6
const arr4 = new Array(2).fill(0);
console.log(arr4);

