const MongoClient = require('mongodb').MongoClient,
  test = require('assert');
//conect client
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
    console.log('Connected to MongoDB server');

  /*db.collection('todos').insertOne({
      text:'Something to do',
      completed:false
    }, (err,result) => {
      if (err){
        return console.log('Unable to insert');
      }

      console.log(JSON.stringify(result.ops,undefined,2));
    });*/

    db.collection('Users').insertOne({
      Users: 'Anwar',
      Age: '25',
      Location:'Dhaka'

      } , (err,result) =>{
      if(err){
        return console.log('Unable to insert',err);
      }
    console.log(result.ops[0]._id.);

});

    db.close();
});
