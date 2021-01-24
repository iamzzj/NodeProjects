const express = require('express');

const userRouter = require('./router/user_router');

const app = express();

function log_minddleware(req, res, next){
	console.log("req conmming...");
	next();
}
app.use(log_minddleware);

// 加载一个 static的中间件
app.use(express.static('static',{
	extensions:['html']
}))

app.use('/user', userRouter);

//中间件完整的结构
//1.是一个函数

//2.err.req,res,next-->function

/*function demo_middleware(err,req,res,next){
	//1.异常
	//2.处理业务功能，转交控制权 next
	//3.响应请求--结束响应--当作路由的处理函数
}

//text?name=2322
function valid_name_middleware(req,res,next){
	let {name} = req.query;
	if(!name || name.length){
		res.json({
			messagge: '缺少name参数'
		})
	}else{
		next();
	}
}

// 1.
app.all('*', valid_name_middleware);

// 2
app.get('/test',(req,res)=>{
	res.json({
		messagge: 'test'
	})
})*/

app.listen(3000, ()=>{
	console.log("server start")
})