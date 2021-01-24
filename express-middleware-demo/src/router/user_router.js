const express = require('express');

const router = express.Router();

router.use(function(req, res, next){
	console.log('log from router');
	next();
})

router.get('/login', [vlaid_login_params], (req,res)=>{
	let {formData} = req;
	res.json({
		formData,
		message: 'user demo'
		}
	)
})


function vlaid_login_params(req, res, next){
	let {name, password} = req.query;
	if(!name || !password){
		res.json({
			message: '参数校验失败'
		})
	}else{
		req.formData = {
			name,password
		}
		next()
	}
}

module.exports = router;
