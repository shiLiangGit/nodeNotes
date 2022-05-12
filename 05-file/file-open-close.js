// file.readFile() 和 file.writeFie() 是将文件一次性的读取或写入到内存中，对于操作大型文件不合适
// file.open() 和 file.close() 是适用于对文件（大文件）的边读边写或边写边读

const fs = require('fs');
const path = require('path');

// 1、fs.open(文件路径，操作权限flag, 回调):
// （2）成功打开，会返回码值3，也是当前打开文件标识
///2、fs.close(打开的文件标识码, 成功回调):
fs.open('data.txt', 'r', (err, fd) => {
   console.log('fd:', fd); // 成功打开，fd为3， fd也是当前打开文件标识
   if (fd) {
       fs.close(fd, (err) => {
           console.log('文件已关闭')
       });
   }
});


