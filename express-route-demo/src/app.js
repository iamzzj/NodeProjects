const express = require('express');

const app = express();

//1. 通过请求的方法类型 get/post/put/delete
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
})

app.listen(3000, ()=>{
	console.log("server run port 3000")
});