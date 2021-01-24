const express = require('express');

const router = express.Router();

/*router
	.[method] //get
router.all
router.use*/

router.get('/list', (req, res)=>{
	res.json({
		list:[
			{
				id: 001,
				name: 'zs'
			}
		]
	})
});

module.exports = router;