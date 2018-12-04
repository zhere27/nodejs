var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");

    var query = {address: "Highway 41"};
    var newValue = { $set: {name: "Micky", address: "Canyon 123"}};
    dbo.collection("customers").updateOne(query, newValue, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });

});