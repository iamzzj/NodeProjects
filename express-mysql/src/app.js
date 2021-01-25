const express = require('express');

//model
const models = require('../models');

//app
const app = express();

//index.html
app.use(express.static('static', {
    extensions: ['html']
}))

app.get('/create', async (req, res) => {
    let {name} = req.query;
    // promise user-->sequelize object
    let user = await models.User.create({
        name
    })
    console.log(user)
    res.json({
        message: "success",
        user
    })
})

app.get('/list', async (req, res) => {
    let list = await models.User.findAll();
    res.json({
        list
    })
})

app.listen(9999, () => {
    console.log("server start 3000");
})