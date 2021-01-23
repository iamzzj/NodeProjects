// systm cpu
const os = require('os');

/*const cpus = os.cpus();// current sysytem cpus
console.log(cpus.length);

// 内存
const total = os.totalmem();// bytes
console.log(total/1024/1024/1024);
const free = os.freemem();
console.log(free/1024/1024/1024);*/

const http = require('http');

const server = http.createServer((req, res) => {
 res.end('hello');
})

server.listen(3000, '127.0.0.1', ()=>{
	console.log('server start');
})