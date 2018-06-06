var express = require('express');
var fs = require('fs');
var fileData = JSON.parse(fs.readFileSync("./data/data.json", "utf8"));
var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017";
var databaseName = "userData"

var checkAuth = function (req, res, next) {
    console.log("Checking Authingy!");
    if (req.session.user && req.session.user.isAuthenticated) {
        next();
    } else {
        res.redirect('/login');
    }
}

var router = express.Router();

var nav = [{
    "name": "Home",
    "path": "/"
}, {
    "name": "Edit Posts",
    "path": "/edit"
}, {
    "name": "Login",
    "path": "/login"
}, {
    "name": "Logout",
    "path": "/logout"
}
];



router.route("/").get(
    function (req, res) {
        var data = {
            mainTitle: "Pug Site",
            title: "Welcome",
            navOptions: nav
        };
        res.render("publicHome", data);
    }
);

router.route("/edit").get(
    function (req, res) {
        var data = {
            mainTitle: "Pug Site",
            title: "Edit if you dare!",
            navOptions: nav
        };
        res.render("editUserPost", data);
    }
);

router.route("/privateHome").get(
    checkAuth,
    function (req, res) {
        var data = {
            mainTitle: "Home",
            title: "Welcome",
            navOptions: nav
        };
        res.render("privateHome", data);
    }
);

router.route("/privateHome").post(
    function (req, res) {

        (async function mongo() {
            try {
                myObj = { "post": post, "user": name, "date": date };
                myJSON = JSON.stringify(myObj);
                localStorage.setItem("data", myJSON);
            } catch (err) {
                console.log("Mongo Error!");
                res.send(err);
            } finally {
                client.close();
            }
        }());
    }
);

router.route("/logout").get(
    function (req, res) {
        req.session.destroy(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
    }

);

router.route("/login").get(
    checkAuth,
    function (req, res) {
        var data = {
            mainTitle: "Pug Site",
            title: "Please Login or Create an Account",
            navOptions: nav
        };
        res.render("login", data);
    }
);

router.route("/login").post(
    function (req, res) {

        (async function mongo() {
            try {
                myObj = { "username": name, "password": password, "isAdmin": admon, "image": image, "email": email, "age": age };
                myJSON = JSON.stringify(myObj);
                localStorage.setItem("data", myJSON);
            } catch (err) {
                console.log("Mongo Error!");
                res.send(err);
            } finally {
                client.close();
            }
        }());
    }
);

module.exports = router;