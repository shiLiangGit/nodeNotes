// process：进程



// 1、获取当前脚本占用内存情况：process.memoryUsage()
// {
//     rss: 28209152,      // 常驻内存
//     heapTotal: 4341760, // 执行初期预申请的内存大小
//     heapUsed: 3453552,  // 当前实际占用的内存大小
//     external: 216046,   // 底层c、c++核心模块占用内存大小
//     arrayBuffers: 11146 // 缓冲区空间大小
// }

// const fs = require('fs'); // 测试heapUsed大小改变
// Buffer.alloc(1000); // 测试arrayBuffers大小改变 ， arrayBuffers 加了1000
// console.log(process.memoryUsage())


// 2、process.cpuUsage() // 获取当前脚本占用cpu情况
// { user: 31000, system: 15000 }
// console.log(process.cpuUsage())


// 3、运行环境：运行目录、node环境、cpu架构、用户环境、系统平台
// console.log(process.cwd()); // 当前脚本运行所在目录
// console.log(process.version); // node版本号
// console.log(process.versions) // 更多node版本信息
// console.log(process.arch)     // cpu系统位数：x64
// console.log(process.env)
// console.log(process.env.NODE_ENV); // 环境如：development, production
// console.log(process.env.PATH) // 本机配置的系统环境变量
// console.log(process.env.USERPROFILE) // 用户管理员目录， linux系统可能是/home目录
// console.log(process.platform) // 系统平台

// 4、运行状态：启动参数、PID（进程id）、运行时间
// console.log(process.argv); // 脚本启动参数
// console.log(process.argv0); // 第一个脚本参数
// console.log(process.pid); // PID（进程id）
// console.log(process.uptime()); // 运行时间:脚本从执行到当前行 --- 所消耗时间



// 5、事件，当前脚本执行完成回调（属于异步任务）

process.on('exit', (code) => {
    console.log('exit ' + code);
    // 不会执行异步处理
    setTimeout(() => {
        console.log('exit ' + '不会执行异步任务')
    }, 1000)
});
process.on('beforeExit', (code) => {
    console.log('beforeExit ' + code);
    // 会执行异步处理
    // setTimeout(() => {
    //     console.log('beforeExit ' + '执行了异步任务')
    // }, 1000)
});
console.log('代码执行完了')


// 6、标准输入、输出、错误
process.stdin.pipe(process.stdout); // pipe()管道