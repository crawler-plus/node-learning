/**
 * Created by yb
 */
class Student {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
        this.getInfo = () => {
            console.log("name:", this.name, "sex:", this.sex);
        }
    }
}

const stu = new Student("yb", 'male');
stu.getInfo();
stu.__proto__.sayHello = () => {
    console.log("Hello");
}
stu.sayHello();


