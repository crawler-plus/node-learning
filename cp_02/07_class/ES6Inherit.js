/**
 * Created by yb
 */
const Person = require("./ES6Class");

class Student extends Person {

    constructor(name, age, sex) {
        super(name, age);
        this.sex = sex;
    }

    getInfo() {
        return super.getInfo() + "," + this.sex
    }
}

const student = new Student("yb", "30", "male");


console.log(student instanceof Student); //true
console.log(Student.prototype);// Student {}
console.log(student.__proto__ === Student.prototype);
console.log(Student.__proto__ === Person.prototype.constructor);//true
console.log(Student.__proto__ == Person);//true


