// nodejs的事件驱动-events模块的发布订阅模式
const EventEmitter = require('events');
const myEvent = new EventEmitter();
myEvent.on('事件1', function () {
    console.log('事件1执行了')
});
myEvent.on('事件1', function () {
    console.log('事件1-2执行了')
});
myEvent.on('事件2', function () {
    console.log('事件2执行了')
});
// 按发布顺序，顺序执行订阅处理
myEvent.emit('事件2');
myEvent.emit('事件1');
