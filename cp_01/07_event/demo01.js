/**
 * Created by yb
 */
const eventEmitter = require("events");
const myEmitter = new eventEmitter();
myEmitter.on("event", () => {
    console.log("event");
    console.log(myEmitter.eventNames())
})
myEmitter.emit("event");


