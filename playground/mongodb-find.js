const {MongoClient,ObjectId} = require('mongodb');


//  const ObjectId = require('mongodb').ObjectID;
//conect client
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
    console.log('Connected to MongoDB server');

  /*  db.collection('todos').find().toArray().then((docs)=>{
      console.log('todos');
      console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        console.log('Unable to find');
    });
*/
    db.collection('todos').find().count().then((count)=>{
      console.log(`todos count: ${count}`);
    //  console.log(JSON.stringify(count,undefined,2));
    },(err) => {
        console.log('Unable to find');
    });


    //db.close();
});
