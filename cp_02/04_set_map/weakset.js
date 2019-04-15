/**
 * Created by yb
 */
const weakSet = new WeakSet();

weakSet.add({a: 1, b: 2});// success
console.log(weakSet.size);// undefined


