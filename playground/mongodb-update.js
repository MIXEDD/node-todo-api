//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,client) => {
    if(error)
        return console.log('Unable to connect to MongoDB server');

    console.log('Connected to mongo DB');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
       _id: new ObjectID('5b6c0e91c5a52361b297c3c4')
    }, {
        $set: {
            name:'Maksimilian'
        },
        $inc: {
            age: 33
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });
    //client.close();
});