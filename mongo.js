var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log('Connected');

    var cursor = db.collection("employee").find( );
    console.log(cursor);
    cursor.each(function (err, doc) {
        console.log(doc);
    });

    db.close();
});