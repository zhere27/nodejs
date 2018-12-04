var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");


    dbo.collection("orders").aggregate([{
        $lookup: {
            from: 'products',
            localField: 'product_id',
            foreignField: '_id',
            as: 'orderdetails'
        }
    }
    ]).toArray(function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });

});