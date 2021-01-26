const express = require('express');
const bodyParser = require('body-parser');

const todoRouter = require('./router/todo.router');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({extends: true}));

app.use(express.static('static', {
    extensions: ['html']
}))

app.use('/todo', todoRouter);

app.use((err, req, res, next) => {
    if (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

app.listen(3000, () => {
    console.log("server start at http://localhost:3000/")
})