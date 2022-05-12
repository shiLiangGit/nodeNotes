// 目录操作api
// 1、access: 判断文件或目录是否存在或者是否具有操作权限
// 2、stat:获取目录或文件信息, 检测文件、目录是否存在
// 3、mkdir: 创建目录
// 4、rmdir: 删除目录
// 5、readdir：读取目录中内容
// 6、unlink：删除指定文件

const fs = require('fs');
// 1、access(目录或文件路径, 回调函数):
// (1) 文件或目录不存在，会报错
// fs.access('a.txt', (err) => {
//     if (err) return console.log(err);
//     console.log('有操作权限')
// });

// 2、stat(目录或文件路径, 回调函数)：获取目录或文件信息, 常用于检测文件、目录是否存在
// 回调函数，stats 包含文件所有信息，及 isFile()、isDirectory() 方法
// fs.stat('a.txt', (err, stats) => {
//     console.log(stats.size)             // 文件大小：3448字节
//     console.log(stats.isFile())         // 是否是文件：true
//     console.log(stats.isDirectory())    // 是否是目录： false
// });

// 3、mkdir(目录路径, options, 回调函数):
// options: 可配置 recursive: true, 递归创建
fs.mkdir('temp/a/c', {recursive: true}, (err) => {
    if (err) return console.log(err);
    console.log('目录创建成功');
    // 检测文件是否存在
    fs.stat('temp/a.txt', (err) => {
        if (err) {
            // 文件不存在，先创建文件
            fs.writeFile('temp/a.txt', 'r', (err) => {
                if (err) return console.log(err);
                console.log('c.txt创建成功');
            });
        }
    });
});

// 4、rmdir(目录路径, options, 回调函数):
// options: 可配置 recursive: true, 递归删除
// fs.rmdir('a', {recursive: true}, (err) => {
//     if (err) return console.log(err);
//     console.log('目录删除成功')
// });


// 5、readdir(目录路径, 回调函数):
// options: 可配置 recursive: true, 递归删除
// 只能读取下一级目录，不能多级读取
// fs.readdir('a', (err, files) => {
//     if (err) return console.log(err);
//     console.log(files) // files为目录名、文件名组成的数组
//     console.log('获取目录、文件成功')
// });

// 6、unlink(文件路径, 回调函数): 删除文件
// fs.unlink('a/a.txt', (err, files) => {
//     if (err) return console.log(err);
//     console.log('文件删除成功')
// });