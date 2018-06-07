var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var router = require('./routes/routes');
app.use("/", router);
var router = require('./routes/adminRoutes');
app.use("/admin/", router);

app.use(express.static(__dirname + '/public'));

app.set('views', './views');
app.set('view engine', 'pug');

app.listen(3001, function(){
    console.log("Express Listening on Port: 3001");
});
