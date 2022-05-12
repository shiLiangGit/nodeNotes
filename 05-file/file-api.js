// fs 是nodejs内置核心模块
// 异步文件操作api（加上Sync代表同步操作）
//   -- readFile: 从指定文件中读取数据
//   -- writeFile: 写入数据到指定文件
//   -- appendFile: 已追加方式向指定文件中写入数据
//   -- readFile: 将某个文件中的数据拷贝到另一个文件中
//   -- watchFile: 对指定文件进行监控

const fs = require('fs');
const path = require('path');
// 1、readFile():
// 如果路径文件不存在，则会抛错到err
// fs.readFile(path.resolve( 'data.txt'), 'utf-8', (err, data) => {
//     console.log('err:', err)
//     console.log('data', data)
// });

// 2、writeFile(文件路径， 配置项， 回调函数):
// 如果路径文件不存在，则会创建该文件
// r+:不清空写入;w+:先清空再写入
// fs.writeFile('hello.txt', 'hello',{
//     mode: 438,
//     flag: 'r+',
//     encoding: 'utf-8'
// }, (err, data) => {
//     if (!err) {
//         fs.readFile(path.resolve( 'hello.txt'), 'utf-8', (err, data) => {
//             console.log('err:', err)
//             console.log('data', data)
//         });
//     }
// });

// 3、appendFile(文件路径， '添加的数据'， 回调函数):
// fs.appendFile('data.txt', '我来自北京哦', (err) => {
//     if (!err) {
//         console.log('写入成功')
//     }
// });

// 4、copyFile(源文件路径， 目标文件路径， 回调函数):
// fs.copyFile('data.txt', 'test.txt', (err) => {
//     if (!err) {
//         console.log('拷贝成功')
//     }
// });


// 4、copyFile(文件路径， 配置项， 回调函数):
// interval:（监听间隔时长）单位为ms
fs.watchFile('data.txt',  {interval: 20},(cur, pre) => {
    if (cur.mtime !== pre.mtime) {
        console.log('文件修改了')
    }
});