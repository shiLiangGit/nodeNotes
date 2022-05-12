const http = require("http");
function sleepTime(time) { // 模拟主线程代码执行，达到占用cpu的效果
    let sleep = Date.now() + time * 1000;
    while (Date.now() < sleep){}
}
sleepTime(4); // 休眠4秒
const server = http.createServer((req, res) => {
    res.end('start servering');
});
server.listen(8082, () => {
    console.log('服务启动了')
});