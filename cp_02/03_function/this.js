/**
 * Created by yb
 */
const date = {
    year: 2017,
    month: 5,
    day: 15,
    getTime: function () {
        const self = this;
        const func1 = function () {
            return self.year + "/" + self.month + "/" + self.day;
        };
        return func1();
    }
};
console.log(date.getTime());

function foo() {
    setTimeout(() => {
        console.log(this.id); // id绑定在global对象上，这里为undefined。
    }, 100);
}
foo();
