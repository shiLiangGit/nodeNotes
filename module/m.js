// 1、模块的导出
// const a = '你好';
// const test = function () {
//     console.log('hello')
// }
// module.exports = {
//     a,
//     test
// }

// 2、module
// module.exports = 1111;
// console.log(module);
/*Module {
    id: '.',
    path: 'D:\\devTest\\nodejs高级编程\\module',
    exports: 1111,
    filename: 'D:\\devTest\\nodejs高级编程\\module\\m.js',
    loaded: false,
    children: [],
    paths: [
        'D:\\devTest\\nodejs高级编程\\module\\node_modules',
        'D:\\devTest\\nodejs高级编程\\node_modules',
        'D:\\devTest\\node_modules',
        'D:\\node_modules'
    ]
}*/
// 3、exports
// exports.name = 111;
// exports = {
//     age: 12
// }

// 4、同步加载
// let name = 'lg';
// let curTime = new Date();
// while (new Date() - curTime < 4000){}
// module.exports = name;
// console.log('m.js被导入了')

// 5、require.main
console.log(require.main === module) //