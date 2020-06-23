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
  burger.insertOne(req.body.burgerName),
    function () {
      res.redirect("/");
    };
});

router.put("/burger/eat/:id", function (req, res) {
  burger.updateOne(req.params.id, function () {
    res.redirect("/");
  });
});

module.exports = router;
