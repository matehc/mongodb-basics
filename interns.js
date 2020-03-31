var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("matehc");
    dbo.createCollection("interns", function(err, res) {
        if (err) throw err;
        console.log("Collection created by matehc");
        db.close();
    })

})