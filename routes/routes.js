var express = require('express');
var fs = require('fs');
var router = express.Router();
// var fileData = JSON.parse(fs.readFileSync("data/merch.json", "utf8"));

var router = require('./routes/routes');
app.use("/login", router);

var nav = [{
    "name": "Login Page",
    "path": "/"
}
];

router.route("/").get(
    function (req, res) {
        var data = {
            title: "Login Page"
        };
        res.render("login", data);
    }
);