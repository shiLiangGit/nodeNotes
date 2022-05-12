const fs = require('fs');
const path = require('path');

/***
 * fs.open()、fs.read()、fs.write()、fs.close() 常配合使用来读取写入大文件
 * @type {Buffer}
 */

// 1、fs.read(打开的文件标识，buffer容器，写入buffer起始位置， 写入buffer的长度，读取文件内容的起始位置，回调);
// （1）所谓的read操作就是将数据从磁盘文件写入到buffer（缓冲区）中
// let buf1 = Buffer.alloc(10);
// fs.open('data.txt', 'r', (err, rfd) => {
//     fs.read(rfd, buf1, 0, 5, 0, (err, readBytes, data) => {
//         console.log(readBytes) // 代表读取文件的长度
//         console.log(data) // buffer数据
//         console.log(data.toString()) // data 写入buffer的实际内容
//     });
// });



// 2、fs.write(打开的文件标识，缓存区中buffer数据，读取buffer起始位置， 读取buffer的长度，写入文件的起始位置，回调);
// （1）参数写入文件的起始位置若不是0， 则写入内容是前面位置会用nul填充
let buf2 = Buffer.from('1234567890');
fs.open('write.txt', 'w', (err, wfd) => {
    fs.write(wfd, buf2, 1, 4, 0, (err, written, data) => {
        console.log(written.toString()) // 代表写入文件的内容的字节长度
        console.log(data.toString()) // data 标识当前读取的缓存区buffer的内容
    });
});