/**
 * Created by yb
 */
setTimeout(args => {
    console.log(args);
}, 0, 'timeout');

setImmediate(() => {
    console.log('immediate');
});

