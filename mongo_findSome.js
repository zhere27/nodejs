var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");

    dbo.collection("customers").find({}, {projection: {_id: 0, name: 1, address: 1}}).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);

        console.log(res[2].address);
        db.close();
    });

});