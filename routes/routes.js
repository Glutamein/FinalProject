var express = require('express');
var fs = require('fs');
var router = express.Router();
var fileData = JSON.parse(fs.readFileSync("data/merch.json", "utf8"));

var router = require('./routes/routes');
app.use("/", router);

router.route("/").get(
    function (req, res) {
        var data = {
            title: "yes"
        };
        res.render("index", data);
    }
);