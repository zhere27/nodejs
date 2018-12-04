var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var myobj = [
        { _id: 154, name: "Chocolate Heaven"},
        { _id: 155, name: "Tasty Lemons"},
        { _id: 156, name: "Vanilla Dreams"},
        
    ];

    dbo.collection("products").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Number of document inserted: " + res.insertedCount);
        db.close();
    });

});