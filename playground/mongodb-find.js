//const MongoClient = require('mongodb').MongoClient;
// check destructuring below:
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b5621a43c2f6c8a5084a04e')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count: ${count}`);
    },(err)=>{
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({name:'Pedro'}).count().then((count)=>{
        console.log(`Pedro count: ${count}`);
    }, (err)=>{
        console.log('Unable to fetch users', err);
    });

    db.collection('Users').find({name:'Pedro'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    }, (err)=>{
        console.log('Unable to fetch users', err);
    });
    //db.close();
});