const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const appPort = 4567;
const app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=> {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    })
});


app.listen(appPort, () => {
    console.log(`Server started on port: ${appPort}`);
});

module.exports = {app};