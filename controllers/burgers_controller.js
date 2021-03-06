var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burger/create", function (req, res) {
  burger.insertOne(req.body.burger_name, function () {
    res.redirect("/");
  });
});

router.post("/burger/eat", function (req, res) {
  burger.updateOne(req.body.id, function () {
    console.log("redirected");
    res.redirect("/");
  });
});

module.exports = router;
