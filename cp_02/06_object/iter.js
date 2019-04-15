/**
 * Created by yb
 */
const obj = {
    "name": "yb",
    "age": 30,
    "sex": "male"
};

Object.defineProperty(obj, 'sex', {
    value: "male",
    enumerable: false
});

for (const key in obj) {
    console.log(key + "--" + obj[key]);
}

console.log(Object.keys(obj));//[ 'name', 'age' ]
console.log(Object.getOwnPropertyNames(obj));//[ 'name', 'age', 'sex' ]
