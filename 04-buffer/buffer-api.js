/*
    Buffer实例方法
    1、fill(): 使用数据填充buffer
    2、write()：向buffer中写入数据
    3、toString():从buffer中提取数据
    4、slice():截取buffer
    5、indexOf(): 在buffer中查找数据
    6、copy(): 拷贝buffer中的数据
*/

// 1、buffer.fill(参数1，参数2，参数3)：数据不够会循环填充
/*  -- 最多可接收3个参数
  -- 参数1，如长度小于指定的buffer大小，则会循环填充直至等于设定的buffer大小
           如长度大于指定的buffer大小，则会安装指定的buffer大小截取参数1
  -- 参数2、表示buffer开始填充的起始位置，起始位置之前的不填充数据，会用空00表示
  -- 参数3、表示buffer开始填充的结束位置（不填充结束位置），起始位置之后的不填充数据，会用空00表示
*/
let buffer = Buffer.alloc(6);
// // 长度不够，重复填充
// buffer.fill('123');
// console.log(buffer) // <Buffer 31 32 33 31 32 33>
// console.log(buffer.toString()) // 123123

// 长度超出，截取填充
// buffer.fill('123234234');
// console.log(buffer)               // <Buffer 31 32 33 32 33 34>
// console.log(buffer.toString())    // 123234

// 设置起始位置
// buffer.fill('123', 1);
// console.log(buffer)              // <Buffer 00 30 31 32 33 30>
// console.log(buffer.toString())   // ( 12312)

// 设置截止位置
// buffer.fill('123', 1, 3);
// console.log(buffer)              // <Buffer 00 31 32 00 00 00>
// console.log(buffer.toString())   // ( 12   )


// 2、buffer.write(参数1，参数2，参数3): 有多少数据填充多少，不够不再循环填充
/*  -- 最多可接收3个参数
  -- 参数1，如长度小于指定的buffer大小，不再填充，用00表示
           如长度大于指定的buffer大小，则会安装指定的buffer大小截取参数1
  -- 参数2、表示buffer开始填充的起始位置，起始位置之前的不填充数据，会用空00表示
  -- 参数3、表示buffer从起始位置写入的长度，超出总长度，用空00表示
*/

// // 长度不够，不再填充，用00表示
// buffer.write('123');
// console.log(buffer)                   // <Buffer 31 32 33 00 00 00>
// console.log(buffer.toString())        // 123

// 长度超出，截取填充
// buffer.write('123234234');
// console.log(buffer)               // <Buffer 31 32 33 32 33 34>
// console.log(buffer.toString())    // 123234

// 设置起始位置
// buffer.write('123', 1);
// console.log(buffer)              // <Buffer 00 31 32 33 00 00>
// console.log(buffer.toString())   // ( 123  )

// 设置截止位置
// buffer.write('123', 1, 6);
// console.log(buffer)              // <Buffer 00 31 32 33 00 00>
// console.log(buffer.toString())   // ( 123  )


// 3、buffer.toString(编码， 起始位置， 结束位置): 翻译buffer二进制数据
// 起始、结束位置为顾头不顾尾方式。
let bf = Buffer.from('拉勾教育');
// console.log(bf);                                                // <Buffer e6 8b 89 e5 8b be e6 95 99 e8 82 b2>
// console.log(bf.toString('utf-8', 3, 9)); // 勾教


// 4、buffer.slice('匹配起始位置', '匹配结束位置'):
// 查找数据的索引，匹配到第一个就结束
// 匹配不到，返回-1
// 匹配值只能是数字或字符串，不能是正则
let i = Buffer.from('爱拉勾教育，爱拉勾哦，爱你们，爱大家');
// let str = i.slice(3)
// let str = i.slice(3, 6)
let str = i.slice(-3)
console.log(str.toString()) // -1


// 4、buffer.indexOf('匹配的值', '匹配起始位置', '编码'):
// 查找数据的索引，匹配到第一个就结束
// 匹配不到，返回-1
// 匹配值只能是数字或字符串，不能是正则
let ib = Buffer.from('zz爱拉勾教育，爱拉勾哦，爱你们，爱大家');
// console.log(ib);
// console.log(ib.indexOf('爱'))                 // 2
// console.log(ib.indexOf('爱', 13)) // 15
// console.log(ib.indexOf('爱', 13, 'utf-8')) // 15
// console.log(ib.indexOf('ll')) // -1


// 5、buffer.copy(目标buffer, 源buffer的起始拷贝位置，目标buffer的起始写入位置，目标buffer的结束写入位置): 拷贝
// 格式：源buffer.copy(目标buffer)
// 顾头不顾尾形式
let b1 = Buffer.alloc(6)
let b2 = Buffer.from('拉勾教育')
// b2.copy(b1);
// b2.copy(b1, 2);  // 拉�
// b2.copy(b1, 3);  // 拉
// b2.copy(b1, 3, 3); // 勾
// console.log(b1.toString()) // 拉勾，超长会截取
// console.log(b2.toString()) // 拉勾教育

