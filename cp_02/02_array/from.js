/**
 * Created by yb
 */
// 创建一个array-like object
const a = {};
let i = 0;
while (i < 10) {
    a[i] = i;
    i++;
}
// ES5
a.length = i;
const a1 = Array.prototype.slice.call(a);//需要增加call方法
a1.push(10); //success
console.log(a1);//[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// ES6
const a2 = Array.from(a);//注意，from不是定义在prototype上的
a2.push(10); //success
console.log(a2);//[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]