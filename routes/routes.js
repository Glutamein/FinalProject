var express = require('express');
var fs = require('fs');
var fileData = JSON.parse(fs.readFileSync("./data/data.json", "utf8"));

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017";
var databaseName = "userData"

var router = express.Router();

router.route("/").get(
    function (req, res) {
        var data = {
            title: "yes"
        };
        res.render("index", data);
    }
);