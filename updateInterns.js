var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dBase = db.db("matehc");
  var  _old= { movie: "The Banker", year: "2020", rating: 8 };
  var  _new= { $set: {movie: "Rush Hour", year: "1998", rating: 7 } };
  dBase.collection("myMovies").updateOne(_old, _new, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
  dBase.collection("myMovies").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});