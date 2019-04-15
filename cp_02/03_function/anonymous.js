/**
 * Created by yb
 */
const func1 = a => a;
console.log(func1(3))

const func2 = (arg1 = "Hello", arg2 = "Node") => console.log(arg1, arg2);
func2();