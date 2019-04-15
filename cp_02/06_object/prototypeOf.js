/**
 * Created by yb
 */
const Person = function (name, age) {
    this.name = name;
    this.age = age;
};

function Student() {
}

Student.prototype = Person;

const stud = new Student();
console.log(Object.getPrototypeOf(stud).name);