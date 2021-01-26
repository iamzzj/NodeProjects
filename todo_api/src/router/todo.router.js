const express = require('express');

const models = require('../../db/models');

const router = express.Router();

/*查询列表*/
router.get('/list/:status/:page', async (req, res, next) => {
    let {status, page} = req.params;
    let limit = 10;
    let offset = (page - 1) * limit;
    let where = {};
    if (status != -1) {
        where.status = status;
    }
    //1.状态 1：待办 2：完成 3：删除 -1:全部
    //2.分页
    let list = await models.Todo.findAndCountAll({
        where,
        offset,
        limit
    })
    res.json({
        list,
        message: "查询成功"
    })
})

/*创建一个todo*/
router.post('/create', async (req, res, next) => {
    try {
        let {name, deadline, content} = req.body;
        let todo = await models.Todo.create({
            name,
            deadline,
            content
        })
        res.json({
            todo,
            message: '任务创建成功'
        })
    } catch (error) {
        next(error);
    }
})

/*修改一个todo*/
router.post('/update', async (req, res, next) => {
    try {
        let {id, name, deadline, content} = req.body;
        let todo = await models.Todo.findOne({
            where: {
                id
            }
        })
        if (todo) {
            todo = await todo.update({
                name,
                deadline,
                content
            })
        }
        res.json({
            todo
        })
    } catch (error) {
        next(error)
    }
})

/*修改删除 一个todo*/
router.post('/update_status', async (req, res, next) => {
    try {
        let {id, status} = req.body;
        let todo = await models.Todo.findOne({
            where: {
                id
            }
        })
        if (todo && status != todo.status) {
            todo = await todo.update({
                status
            })
        }
        res.json({
            todo
        })
    } catch (error) {
        next(error);
    }
})

module.exports = router;