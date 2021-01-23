const express = require('express');

// 是一个express实例
const app = express();

/*app.use((req, res)=>{
	res.json({
		name:"zs"
	})
})*/

app.get('/name/:age', (req, res)=>{
	//res.send('tom get')
	let {age} = req.params;
	res.json({
		name: 'tom',
		age
	})
})

app.post('/name', (req, res)=>{
	res.send('tom post')
})

app.listen(3000, ()=>{
	console.log("server start")
})