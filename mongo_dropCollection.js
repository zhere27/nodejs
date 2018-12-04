var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");

    dbo.collection("customers").drop(function (err, delOK) {
        if (err) throw err;
        if(delOK) console.log("Collection deleted!");
        db.close();
    });

});