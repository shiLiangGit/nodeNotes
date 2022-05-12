const fs = require('fs');

function myMkdirSync(dirPath) {
    let pathArr = dirPath.split('/');
    for (let i = 1; i<=pathArr.length;i++){
        let tempPath = pathArr.slice(0, i).join('/');
        try {
            fs.accessSync(tempPath)
        } catch (e) {
            fs.mkdirSync(tempPath)
        }
    }
    console.log('目录创建成功')
}
myMkdirSync('d/e/f')