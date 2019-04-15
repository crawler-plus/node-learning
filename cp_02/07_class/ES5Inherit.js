/**
 * Created by yb
 */
const Person = require('./ES5Class');

function Student(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

Student.prototype = new Person();
Student.prototype.getInfo = function () {
    return this.name + "," + this.age + "," + this.sex;
}
const student = new Student("yb", "male", "30");
console.log(student.getInfo());
console.log(Student.prototype.__proto__ == Person.prototype);//true
console.log(student.__proto__ == Student.prototype);//true

