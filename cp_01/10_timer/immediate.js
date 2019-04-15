/**
 * Created by yb
 */
setImmediate(arg => {
    console.log('executing immediate:', arg);
}, 'so immediate');

setTimeout(() => {
    console.log("timeout");
}, 0);

process.nextTick(() => {
    console.log("next Tick");
});
