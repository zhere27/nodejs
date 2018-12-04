var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");

    var query = { address: "Highway 4" }; 

    dbo.collection("customers").deleteOne(query, function (err, res) {
        if (err) throw err;
        console.log("1 document deleted");

        db.close();
    });

});