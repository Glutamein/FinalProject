var express = require('express');
var fs = require('fs');
var fileData = JSON.parse(fs.readFileSync("./data/data.json", "utf8"));

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017";
var databaseName = "userData"

var router = express.Router();

var checkAuth = function (req, res, next) {
    console.log("Checking Authingy!");
    if (req.session.user && req.session.user.isAuthenticated) {
        next();
    } else {
        res.redirect('/login');
    }
}

var nav = [{
    "name": "Home",
    "path": "/"
},{
    "name":"Edit Posts",
    "path": "/edit"
},{
    "name": "Login",
    "path": "/login"
}
];

var adminNav = [{
    "name": "Home",
    "path": "/"
},{
    "name":"Edit Posts",
    "path": "/edit"
},{
    "name": "Login",
    "path": "/login"
},{
    "name": "Admin Table",
    "path": "/admin/adminTables"
},{
    "name": "Reload Data",
    "path": "/admin/reloadData"
}
];

router.route("/").get(
    function (req, res) {
        var data = {
            mainTitle: "Pug Site",
            title: "Welcome"
        };
        res.render("publicHome", data);
    }
);

router.route("/edit").get(
    function (req, res) {
        var data = {
            mainTitle: "Pug Site",
            title: "Edit if you dare!"
        };
        res.render("editUserPost", data);
    }
);

router.route("/privateHome").get(
    function (req, res) {
        var data = {
            mainTitle: "Pug Site",
            title: "Welcome"
        };
        res.render("privateHome", data);
    }
);

router.route("/privateHome").post(
    function(req, res){

        (async function mongo(){
            try{

            }catch(err){
                console.log("Mongo Error!");
                res.send(err);
            }finally{
                client.close();
            }
        }());
    }
);

router.route("/logout").get(


);

router.route("/login").get(
    // checkAuth,
    function (req, res) {
        var data = {
            mainTitle: "Pug Site",
            title: "Please Login or Create an Account"
        };
        res.render("login", data);
    }
);