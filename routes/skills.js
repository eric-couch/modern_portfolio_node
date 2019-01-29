var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

router.all("/", function(req, res, next) {
  MongoClient.connect(
    "mongodb://webroot:iSYSk7alJQCdDXnDgIA8nRaMc6d4GhZA9VV1gCe7CmrD57XRdajqm4B3y6A6X0FAeOdwLc7zEsBUROsHfHDMjA%3D%3D@webroot.documents.azure.com:10255/?ssl=true",
    function(err, db) {
      var dbo = db.db("modern_portfolio");
      dbo
        .collection("skills")
        .find()
        .toArray(function(err, result) {
          if (err) throw err;
          res.json(result);
          db.close();
        });
    }
  );
});

module.exports = router;
