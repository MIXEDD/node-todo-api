const {ObjectID} = require('mongodb');
const {mongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const id = '5b6c23b1aae75133940c22c6';


//
// Todo.find({
//    _id:id
// }).then((todos) => {
//     console.log('Todos', todos);
//
// });
//
// Todo.findOne({
//     _id:id
// }).then((todo) => {
//     console.log('Todos', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if(!todo)
//         return console.log('Id not found');
//
//     console.log('Todo by id: ' , todo);
// }).catch((e) => console.log(e));

User.findById(id).then((todo) => {
    if(!todo)
        return console.log('Id not found');

    console.log('User by id: ' , todo);
}).catch((e) => console.log(e));

