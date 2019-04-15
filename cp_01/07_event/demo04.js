/**
 * Created by yb
 */
const eventEmitter = require("events");
const myEmitter = new eventEmitter();
myEmitter.on("event", () => {
    console.log("event");
})
myEmitter.on("event", () => {
    console.log("event");
})
myEmitter.emit("event");
console.log(myEmitter.eventNames());
