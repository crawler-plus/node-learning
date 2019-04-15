/**
 * Created by yb
 */
async function test() {
    const data = await new Promise(resolve => {
        resolve("hello");
    });
    console.log(data);
}
test();