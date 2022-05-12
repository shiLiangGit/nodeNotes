// Buffer:
// 1、无效require的一个全局变量
// 2、实现nodejs平台下让javascript 可以操作二进制
// 3、不占用v8堆内存大小的一块其他内存空间
// 4、buffer内存的使用由node来控制，由v8的GC回收
// 5、一般配合stream流使用，充当数据缓冲区（特别是在文件读写操作时）
// 一个中文字符占用三个字节

// 1、创建方式
let b1 = Buffer.alloc(10);        // 创建指定大小的buffer
let b2 = Buffer.allocUnsafe(10);  // 创建指定大小的buffer(不安全)
let b3 = Buffer.alloc(10);
console.log(b1)  // <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(b2)  // <Buffer 00 00 00 00 00 00 00 00 00 00>

// Buffer.from() 方式
// (1) Buffer.from('1'）参数为字符串
// (2) Buffer.from([1,2,3]）参数为数组
let f1 = Buffer.from('1', 'utf-8');
let f2 = Buffer.from('中');
let f3 = Buffer.from([1,2,3]);

console.log(f1)   // <Buffer 31>
console.log(f2)   // <Buffer e4 b8 ad>
console.log(f3)   // <Buffer 01 02 03>
console.log(f2.toString()) // 转换为汉字 --- 中
// (3) Buffer.from(f4'）参数为另一个buffer
let f4 = Buffer.alloc(3);
let f5 = Buffer.from(f4);
console.log(f5) // <Buffer 00 00 00>
