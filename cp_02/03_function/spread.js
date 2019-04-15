/**
 * Created by yb
 */
function func(...args) {
    for (let val of args) {
        console.log(val);
    }
}
func(1, 2, 3);

//合并数组
const arr = [1, 2, 3];
const arr2 = [4, 5];
console.log([...arr, ...arr2]);//[ 1, 2, 3, 4, 5 ]
//将字符串转换为数组
const name = [..."student"];
console.log(name);//[ 'L', 'e', 'a', 'r' ]