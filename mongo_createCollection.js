var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");

    dbo.createCollection("products", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });

});