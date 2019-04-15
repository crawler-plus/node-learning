/**
 * Created by yb
 */
const Person = function (name, age) {
    this.name = name;
    this.age = age;
};

function Student() {
}

const stud = new Student();
Object.setPrototypeOf(stud, Person);
console.log(stud.__proto__);//[Function: Person]


