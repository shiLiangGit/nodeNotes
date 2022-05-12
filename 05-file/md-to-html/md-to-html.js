const fs = require('fs');
const path = require('path');
const marked = require('marked');             // 解析md内容为html标签
const browserSync = require('browser-sync'); // 监听更新html内容
// 1、读取md和css内容
// 2、将上述取出来的内容替换占位符，生成html字符
// 3、将上述的html字符写入到指定的文件html中
// 4、监听md文件内容变化，然后更新html内容
// 5、使用browser-sync 来实时显示html内容


// process.argv[2] 为运行当前脚本是附带的参数：md文件名
let mPath = path.join(__dirname, process.argv[2]);
let cssPath = path.resolve(__dirname, './index.css');
console.log(cssPath)
let htmlPath = mPath.replace(path.extname(mPath), '.html');

fs.watchFile(mPath, {interval: 10}, (cur, pre) => {
    if (cur.mtime !== pre.mtime) {
        console.log('md文档内容更新了');
        fs.readFile(mPath, 'utf-8', (err, data) => {
            // 将md转换为html标签
            let mStr = marked.parse(data);
            if (!err) {
                fs.readFile(cssPath, 'utf-8', (err, cssData) => {
                    console.log(cssData)
                    // 替换temp模板字符串内容
                    let htmlStr = temp.replace('{{content}}', mStr).replace('{{style}}', cssData);
                    fs.writeFile(htmlPath, htmlStr, (err) => {
                        console.log('写入成功了');
                    });
                });
            }
        });
    }
})
// 监听更新html内容
browserSync.init({
    browser: '',
    server: __dirname,
    watch: true,
    index: path.basename(htmlPath)
})
const temp = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>md-to-html</title>
</head>
<body>
{{content}}
</body>
<style>
    {{style}}
</style>
</html>
`;