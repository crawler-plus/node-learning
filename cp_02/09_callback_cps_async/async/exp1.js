/**
 * Created by yb
 */
const func1 = function () {
    require("fs").readFile("1.txt", (err, data) => {
        return data;
    })
};

console.log(func1());


