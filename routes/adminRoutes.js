var express = require('express');
var fs = require('fs');
var fileData = JSON.parse(fs.readFileSync("./data/data.json", "utf8"));
var mongodb = require('mongodb');


var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017";
var databaseName = "userData"

var router = express.Router();

router.route("/adminTables").get(
    checkAuth,
    function (req, res) {
        var data = {
            mainTitle: "Pug Site",
            title: "Here ya go!"
        };
        res.render("adminTables", data);
    }
);

router.route("/reloadData").get(
    checkAuth,
    function(req, res){
        var fileData = JSON.parse(fs.readFileSync("./data/data.json", "utf8"));
        console.log(fileData);

        // IIFE Weirdness
        (async function mongo(){
            try{
                var client = await mongoClient.connect(url);
                var db = client.db(databaseName);
        
                db.dropDatabase(databaseName)
                
                var result1 = await db.collection("user").insertMany(fileData.users);            
                var result2 = await db.collection("posts").insertMany(fileData.posts);
                // var result3 = await db.collection("buildingPrices").insertMany(fileData.buildingPrices);
                
                res.json([result1, result2, result3]);
            }catch(err){
                res.send(err);
            }finally{
                client.close();
            }
        }());
    }
);

router.route("/loadData").get(
    //checkAuth,
    function(req, res){
        var fileData = JSON.parse(fs.readFileSync("./data.json", "utf8"));
        // console.log(fileData);

        // IIFE Weirdness
        (async function mongo(){
            try{
                var client = await mongoClient.connect(url);
                var db = client.db(databaseName);

        
                var result1 = await db.collection("users").insertMany(fileData.users);            
                var result2 = await db.collection("posts").insertMany(fileData.posts);
                // var result3 = await db.collection("").insertMany(fileData.buildingPrices);
                
                res.json([result1, result2]);
                // res.send("Loaded Data!")
            }catch(err){
                console.log(err);
                console.log("Error Loading Data")
                res.send(err);
            }finally{
                client.close();
            }
        }());
    }
);

router.route("/dropData").get(
    checkAuth,
    function(req, res){
        var fileData = JSON.parse(fs.readFileSync("./data/data.json", "utf8"));
        console.log(fileData);

        // IIFE Weirdness
        (async function mongo(){
            try{
                var client = await mongoClient.connect(url);
                var db = client.db(databaseName);
        
                db.dropDatabase(databaseName)
                
                res.send("Data dropped!");
            }catch(err){
                res.send(err);
            }finally{
                client.close();
            }
        }());
    }
);

module.exports = router;