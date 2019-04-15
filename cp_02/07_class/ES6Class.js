/**
 * Created by yb
 */
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return this.name + "," + this.age
    }
}

const person = new Person("yb", "30");
console.log(person.constructor == Person.prototype.constructor);//true
console.log(person.getInfo == Person.prototype.getInfo);//true
console.log(person.getInfo());

module.exports = Person;