var express = require("express");
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.sendFile("index.html", {
    root: path.join(__dirname, "../public/dist/admin")
  });
});

router.get("/skills.html", function(req, res, next) {
  res.sendFile("skills.html", {
    root: path.join(__dirname, "../public/dist/admin")
  });
});

router.get("/contact.html", function(req, res, next) {
  res.sendFile("contact.html", {
    root: path.join(__dirname, "../public/dist/admin")
  });
});

router.get("/work.html", function(req, res, next) {
  res.sendFile("work.html", {
    root: path.join(__dirname, "../public/dist/admin")
  });
});

module.exports = router;