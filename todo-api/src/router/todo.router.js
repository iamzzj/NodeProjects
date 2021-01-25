const express = require('express');

const router = express.Router();

/*查询列表*/
router.get('/list/:status/:page', async (req, res, next) => {
    res.json({
        list: []
    })
})

/*创建一个todo*/
router.post('/create', async (req, res, next) => {
    let {name, deadline, content} = req.body;
    res.json({
        todo: {},
        name,
        deadline,
        content
    })
})

/*修改一个todo*/
router.post('/update', async (req, res, next) => {
    let {id, name, deadline, content} = req.body;
    res.json({
        todo: {},
        id,
        name,
        deadline,
        content
    })
})

/*修改删除 一个todo*/
router.post('/update_status', async (req, res, next) => {
    let {id, status} = req.body;
    res.json({
        todo: {},
        id,
        status
    })
})

module.exports = router;