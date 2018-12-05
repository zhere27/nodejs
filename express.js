var MongoClient = require('mongodb').MongoClient;
var express = require('express');



var str = "";
var app = express();

app.set('view engine', 'pug');

app.route('/Node').get(function (req, res) {
    res.send('Tutorial on Node');
});

app.route('/Angular').get(function (req, res) {
    res.send('Tutorial on Angular');
});

app.get('/', function (req, res) {
    res.render('index',
        { title: 'Guru99', message: 'Welcome' })
});

app.route('/EmployeeId').get(function (err, res) {
    MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbo = db.db("test");

        dbo.collection("customers").findOne({}, function (err, item) {
            if (err) throw err;
            if (item != null)
                str = str + "&nbsp;&nbsp;&nbsp;Company Name:&nbsp;&nbsp;&nbsp;" + item.name + "</br/>";
            db.close();
        });
        res.send(str);
    });
});

var server = app.listen(8080, function () {

});