/**
 * Created by yb
 */
class Person {
    static getName() {
        return "yb";
    }
}
console.log(Person.getName());

class Student extends Person {
    static getName2() {
        return super.getName() + ",Hi";
    }
}
console.log(Student.getName2())