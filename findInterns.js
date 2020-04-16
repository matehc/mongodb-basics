var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dBase = db.db("matehc");
  dBase.collection("myMovies").findOne({}, function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });

  var query = { rating: 7 };
  dBase.collection("myMovies").find(query).toArray(function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });

  dBase.collection("myMovies").find({}, { projection: { _id: 0, movie: 1 } }).toArray(function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});