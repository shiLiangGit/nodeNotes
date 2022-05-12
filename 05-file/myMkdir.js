const fs = require('fs');
const {promisify} = require('util');
// 实现一：递归调用创建多级目录
// function myMkdir(dirPath, cb) {
//     let pathArr = dirPath.split('/');
//     let i = 1;
//     function next() {
//         if (i > pathArr.length) {
//             console.log('目录创建完成');
//             return  cb && cb();
//         }
//         let tempPath = pathArr.slice(0, i++).join('/');
//         fs.access(tempPath, (err) => {
//             if (err) {
//                 // 文件创建完成，再次调用next函数向下级执行创建
//                 fs.mkdir(tempPath, next);
//             } else {
//                 next();
//             }
//         });
//     }
//     next();
// }

// 实现二：使用promisify 实现异步
let access = promisify(fs.access);
let mkdir = promisify(fs.mkdir);
async function myMkdir(dirPath, cb) {
    let pathArr = dirPath.split('/');
    for (let i = 1; i<=pathArr.length;i++){
        let tempPath = pathArr.slice(0, i).join('/');
        try {
           await access(tempPath)
        } catch (e) {
           await mkdir(tempPath)
        }
    }
    cb && cb();
    console.log('目录创建成功')
}
await myMkdir('c/d/e')