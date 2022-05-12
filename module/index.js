// 模块就是小二精且便于维护的代码片段
// 模块化是前端走向工程化的重要一环
// 早期JavaScript语言层面没有模块化规范
// Commonjs、AMD、CMD都是社区模块化规范
// Es6中将模块化纳入标准规范



// 当下常用的模块化规范是Commonjs (nodejs) 和 ESModule（浏览器平台）
// 历程
// Commonjs 规范：
// AMD规范
// CMD规范
// ES modules规范

// 1、Commonjs规范：同步加载，
// 适用于服务器端，因为可以直接从内存中读取文件，对性能影响不大
// 不适用与浏览器端，因为同步加载，会导致页面阻塞，等待时间过长。影响体验
/*
    Commonjs起初是为了弥补js语言模块化的缺陷
    Commonjs是语言层面的规范，当前主要用于Node.js
    Commonjs规定模块化分为引入、定义、标识符三个部分
    Module在任意模块中可直接使用，包含模块信息
    Require接收标识符，加载目标模块
    Exports 和module.exports都能导出模块数据
*/

/*
    1、任意一个js文件就是一个模块，具有独立作用域
    2、使用require导入其他模块
    3、将模块id传入require实现目标模块定位
*/

// 2、Commonjs 中的module属性：
/*
    1、任意js文件，可以直接使用module属性
    2、id:返回模块标识符，一般是文件绝对路径
    3、filename:返回文件模块的绝对路径
    4、loaded:返回布尔值，表示模块是否加载完成
    5、parent：返回对象，存放调用当前模块的模块信息
    6、children：返回数组，存放当前模块调用的其他模块
    7、exports: 返回当前模块暴露给外部的内容
    8、paths: 返回数组，存放不同目录下node_modules位置
*/

///3、module.exports 和 exports 的区别
/*
    module.exports 是Commonjs定义的导出内容的方法
    exports是nodejs为了方便自定义的，是对module.exports 的内存地址的引用，（注意：exports不能被整体赋值，这样会导致引用关系丢失（变成局部变量），失去导出内容的作用）
*/

///4、require属性：
/*
    1、基本功能是读入并执行一个模块文件
    2、resolve:返回模块文件绝对路径
    3、extensions: 依据不同后缀名执行不同的解析操作
    4、main：返回主模块对象（当前的入口模块/js文件）
*/
