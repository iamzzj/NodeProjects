const express = require('express');

const app = express();

const memberRouter = require('./member.router');
const skuRouter = require('./sku.router');
// 注册路由
app.use('/member', memberRouter);
app.use('/sku', skuRouter);

// app -->Application -->web 服务的实例

/*//1. 通过请求的方法类型 get/post/put/delete
app.get("/demo",(req, res)=>{
	//req:请求对象
	//res:服务器响应对象
	res.json({
		message: 'hello express route from get demo'
	})
})
app.get("/demo",(req, res)=>{
	//req:请求对象
	//res:服务器响应对象
	res.json({
		message: 'hello express route from post demo'
	})
})

//2.通过uri
app.get("/user/byname",(req, res)=>{
	let {name} = req.query;
	res.json({
		name
	})
})*/

/*//全响应
app.all("/demo",(req, res)=>{
	//req:请求对象
	//res:服务器响应对象
	res.json({
		method: req.method,
		message: 'demo'
	})
})*/

//日志
/*app.all('*', (req, res)=>{
	res.json({
		message: 'demo',
		method: req.method,
		uri: req.path
	})
})*/
/*app.use( (req, res)=>{
	res.json({
		message: 'demo use',
		method: req.method,
		uri: req.path
	})
})*/

app.listen(3000, ()=>{
	console.log("server run port 3000")
});