const {ObjectID} = require('mongodb');
const {mongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({_id:'5b7195841c739d1a95e3fd6b'}).then((result) => {
    console.log(result);
});

Todo.findByIdAndRemove('5b7195841c739d1a95e3fd6b').then((result) => {
    console.log(result);
});

