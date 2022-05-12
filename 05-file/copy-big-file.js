const fs = require('fs');

let buf = Buffer.alloc(10);
let bufferSize = buf.length;
let readOffset = 0;
fs.open('a.txt', 'r', (err, rfd) => {
    fs.open('b.txt', 'w', (err, wfd) => {
        function next() {
            fs.read(rfd, buf, 0, bufferSize, readOffset, (err, bytesRead, buffer) => {
                if (!bytesRead) {
                    fs.close(rfd, () => {});
                    fs.close(wfd, () => {});
                    console.log('拷贝完成');
                    return;
                }
                readOffset += bytesRead;
                // 读几个，就写几个
                fs.write(wfd, buf, 0, bytesRead, (err, written, buffer) => {
                    if (!err) next();
                });
            });
        }
        next();
    });
});