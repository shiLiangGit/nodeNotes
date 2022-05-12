console.log(__dirname)   // __dirname 当前脚本所在绝对目录
console.log(__filename) // __filename 当前脚本所在绝对路径
console.log(this) // node全局环境下，this为空对象{}
// node模块会默认导入像require()、module、exports、函数