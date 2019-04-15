/**
 * Created by yb
 */
console.log(Buffer.from('hello, world!').toString('base64'));
// 转换成base64字符串

console.log(Buffer.from('aGVsbG8sIHdvcmxkIQ==', 'base64').toString());
// 还原base64字符串

console.log(Buffer.from('hello, world!').toString('hex'));
// 转换成十六进制字符串

console.log(Buffer.from('68656c6c6f2c20776f726c6421', 'hex').toString());
// 还原十六进制字符串

