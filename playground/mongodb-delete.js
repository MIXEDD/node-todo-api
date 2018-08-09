//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,client) => {
    if(error)
        return console.log('Unable to connect to MongoDB server');

    console.log('Connected to mongo DB');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Users').deleteMany({name:'Max'}).then((result) => {
    //     console.log(result);
    // });
    //delete one
    // db.collection('Users').deleteOne({name:'Mike'}).then((result) => {
    //     console.log(result);
    // });
    //findOneAndDelete
    db.collection('Users').findOneAndDelete({_id:new ObjectID('5b6bedf89f70c40d0876c5b9')}).then((result) => {
        console.log(result);
    });
    //client.close();
});