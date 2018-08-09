//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,client) => {
    if(error)
        return console.log('Unable to connect to MongoDB server');
    console.log('Connected to mongo DB');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id:new ObjectID('5b6bf5bfc5a52361b297b8ef')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch todos ', err);
    // });

    db.collection('Users').find({name:'Jen'}).toArray().then((docs) => {
        console.log(`Todos array: ${JSON.stringify(docs,undefined,2)}`);
    }, (err) => {
        console.log('Unable to fetch todos ', err);
    });

    client.close();
});