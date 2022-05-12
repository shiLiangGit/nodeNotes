// 1、模块导入
// const obj = require('./m');
// console.log(obj) // { a: '你好', test: [Function: test] }

// 2、module
// console.log(module);
/*Module {
    id: '.',
    path: 'D:\\devTest\\nodejs高级编程\\module',
    exports: {},
    filename: 'D:\\devTest\\nodejs高级编程\\module\\node-common.js',
    loaded: false,
    children: [   // 包含子级module  m.js的信息
        Module {
            id: 'D:\\devTest\\nodejs高级编程\\module\\m.js',
            path: 'D:\\devTest\\nodejs高级编程\\module',
            exports: 1111,
            filename: 'D:\\devTest\\nodejs高级编程\\module\\m.js',
            loaded: true,
            children: [],
            paths: [Array]
        }
    ],
    paths: [
        'D:\\devTest\\nodejs高级编程\\module\\node_modules',
        'D:\\devTest\\nodejs高级编程\\node_modules',
        'D:\\devTest\\node_modules',
        'D:\\node_modules'
    ]
}*/

// 3、exports
// const obj = require('./m');
// console.log(obj) // {}, exports 被重置赋值，导出功能失效，输出为空对象

// 4、同步加载（外部被导入模块加载完，才执行后续代码）
// const obj = require('./m');
// console.log('node-common被执行了')  // 延迟4秒，也是先输出 m.js 被导出，再输出node-common被执行了


// 5、require.main
const obj = require('./m');  // false; require.main指示当前导入他的模块，即 node-common.js
console.log(require.main === module) // true;