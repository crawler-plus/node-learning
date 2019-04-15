/**
 * Created by yb
 */

process.env.TZ = "Asia/Shanghai";

Date.prototype.TimeZone = new Map([
    ['Europe/London', 0],
    ['Asia/Shanghai', 8],
    ['America/New_York', -5]
])

Date.prototype.zoneDate = function () {
    if (process.env.TZ == undefined) {
        return new Date();
    } else {
        for (let item of this.TimeZone.entries()) {
            if (item[0] == process.env.TZ) {
                let d = new Date();
                d.setHours(d.getHours() + item[1]);
                return d;
            }
        }
        return new Date();
    }
}

const date = new Date().zoneDate();
console.log(date);

// Date对象的一些其他方法
console.log(date.toLocaleString());//4/30/2017, 10:44:10 PM 本地时间
console.log(date.toUTCString());//推荐使用toUTCString进行代替toGMTString,二者返回结果相同
//获得当前时区
console.log(date.getTimezoneOffset());


