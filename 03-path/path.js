const path = require('path');

// 1、path.basename(): 获取路径中的基础名称
/***
 * 01、返回的是接收路径当中的最后一部分（文件名或最后一个目录名）
 * 02、第二个参数表示扩展名，如果没有配置则返回完整的文件名带后缀
 * 03、第二个参数作为后缀时，如果没有在当前路径中匹配到，那么就会忽略，返回完整的文件名带后缀
 * 04、处理目录路径时，如果说结尾处有路径分隔符，则也会被忽略掉
 */

console.log(path.basename(__filename))                  // path.js
console.log(path.basename(__filename, '.js'))     // path
console.log(path.basename(__filename, '.css'))    // path.js
console.log(path.basename('/a/b/c'))                // c
console.log(path.basename('/a/b/c/'))               // c


// 2、path.dirname():获取路径目录（绝对路径），最后一个文件或目录的上一级目录
/***
 * 01、最后一个文件或目录的上一级目录
 * 02、处理目录路径时，如果说结尾处有路径分隔符，则也会被忽略掉
 */
console.log(path.dirname(__filename))     // D:\devTest\nodejs高级编程
console.log(path.dirname('/a/b/c'))   // /a/b
console.log(path.dirname('/a/b/c/')) // /a/b


// 3、获取路径的文件扩展名
/***
 * 01、如果路径中不存在扩展后缀（如：不存在文件名），则返回空
 * 02、如果文件名有多个扩展名，则只取最后一个扩展名
 */
console.log(path.extname(__filename))   // .js
console.log(path.extname('/a/b'))  //   空
console.log(path.extname('/a/b/index.html.js.css'))  // .css（只取最后一个扩展名）
console.log(path.extname('/a/b/index.html.js.'))  // .（只取最后一个扩展名）


// 4、path.parse():解析路径
console.log(path.parse('/a/b/c/index.html')) // {root: '/', dir: '/a/b/c', base: 'index.html', ext: '.html', name: 'index'}
console.log(path.parse('/a/b/c/')) // {root: '/', dir: '/a/b', base: 'c', ext: '', name: 'c'}
console.log(path.parse('./a/b/c/')) // 相等路径，不再返回根目录root；{root: '', dir: '/a/b', base: 'c', ext: '', name: 'c'}

// 5、path.format():序列化路径,和 path.parse()作用相反
let obj = path.parse('./a/b/c'); // {root: '', dir: '/a/b', base: 'c', ext: '', name: 'c'}
console.log(path.format(obj))        // './a/b/c'

// 6、判断当前路径是否为绝对路径(只有/开头的才是绝对路径)
console.log(path.isAbsolute('./a/b/c'));   // false
console.log(path.isAbsolute('/a/b/c'));   // true
console.log(path.isAbsolute('///a'));   // true
console.log(path.isAbsolute(''));   // false
console.log(path.isAbsolute('.'));   // false
console.log(path.isAbsolute('a'));   // false


// 7、path.join(): 拼接路径
console.log(path.join('a/b', '/c', 'index.html')); // a\b\c\index.html
console.log(path.join('a/b', 'c', 'index.html')); // a\b\c\index.html
console.log(path.join('a/b', '/c','../', 'index.html')); // a\b\index.html
console.log(path.join('a/b', '/c','./', 'index.html')); // a\b\c\index.html
console.log(path.join('')); // .  指代当前目录

// 8、path.normalize():规范化路径
console.log(path.normalize(''))                 // .
console.log(path.normalize('a/b/c/d'))          // a\b\c\d
console.log(path.normalize('a/////b/c../d'))    // a\b\c..\d
console.log(path.normalize('a//\/b/c/d'))       // a\b\c\d
console.log(path.normalize('a//\b/c\\/d'))      // a\c\d ---- (\b为退格键)

// 9、path.resolve():拼接绝对路径
// resolve([from], to); // 判断from和to是否有相对关系，有的话以form路径为准，没有则以to路径为绝对路径
console.log(path.resolve('a', 'b')); // D:\devTest\nodejs高级编程\a\b
console.log(path.resolve('/a', 'b')); // D:\a\b
console.log(path.resolve('/a', '/b')); // D:\b
console.log(path.resolve('a', '/b')); // D:\b
console.log(path.resolve('a', '../b')); // D:\devTest\nodejs高级编程\b