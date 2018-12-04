var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");

    var sort = { name: -1 }; // 1 = Ascending -1 = Descending


    dbo.collection("customers").find().sort(sort).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);

        db.close();
    });

});