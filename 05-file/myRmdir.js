// 自定义递归调用删除目录及目录内文件
const fs = require('fs');
const path = require('path');
function myRmdir(rootPath, cb) {
    // 判断当前路径时目录还是文件
    fs.stat(rootPath, (err, stats) => {
        if (!err) {
            if (stats.isDirectory()) {
                // 是目录, 读取下级内容
                fs.readdir(rootPath, (err, files) => {
                    // 拼接子级出完整路径
                    let tempPath = files.map((file) => {
                        return path.join(rootPath, file);
                    })
                    let i = 0;
                    function next() {
                        // 当前i等于tempPath.length等于0时，即代表当前目录为空了，调用删除目录直接删除目录
                        if (i === tempPath.length) {
                            return fs.rmdir(rootPath, cb)
                        }
                        let current = tempPath[i++];
                        myRmdir(current, next);
                    }
                    next();
                });
            } else {
                // 是文件则直接删除即可
                fs.unlink(rootPath, cb);
            }
        } else {
            console.log('目录或文件不存在')
        }
    });
}

myRmdir('temp', () => {
    console.log('所有目录文件已删除')
})