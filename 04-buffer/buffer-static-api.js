// Buffer静态方法

// 1、Buffer.concat([buffer1,buffer2, buffer3,....], '字符长度');
// 第一个参数为：用数组包裹待拼接的buffer列表
// 第二个参数为：设置拼接后的buffer长度
let b1 = Buffer.from('拉勾');
let b2 = Buffer.from('教育');

let b3 = Buffer.concat([b1, b2], 9);
console.log(b1)               // <Buffer e6 8b 89 e5 8b be>
console.log(b2)               // <Buffer e6 95 99 e8 82 b2>
console.log(b3)               // <Buffer e6 8b 89 e5 8b be e6 95 99 e8 82 b2>
console.log(b3.toString());  // 拉勾教育


// 2、Buffer.isBuffer(): 判断数据是否为buffer类型

let b4 = Buffer.alloc(6);
console.log(Buffer.isBuffer(b4)) // true
console.log(Buffer.isBuffer('123')) // false