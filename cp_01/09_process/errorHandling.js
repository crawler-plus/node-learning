/**
 * Created by yb
 */
process.on("uncaughtException", () => {
    console.error("got error");
})
console.log(3 / i);