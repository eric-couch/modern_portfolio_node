var express = require("express");
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index.html", { current: "/" });
});

router.get("/about.html", function(req, res, next) {
  res.render("about.html", { current: "about" });
});

router.get("/skills.html", function(req, res, next) {
  res.render("skills.html", { current: "skills" });
});

router.get("/contact.html", function(req, res, next) {
  res.render("contact.html", { current: "contact" });
});

router.get("/work.html", function(req, res, next) {
  res.render("work.html", { current: "work" });
});

module.exports = router;
