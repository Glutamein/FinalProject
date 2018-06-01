var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', './views');
app.set('view engine', 'pug');

app.listen(3001, function(){
    console.log("Express Listening on Port: 3001");
})