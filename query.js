 var express = require('express');
 var app = express();
 var path = require('path');
 var jquery = require('jquery');
 var bodyparser = require('body-parser')
 app.use(bodyparser.urlencoded({extended: false}));
 
 app.get('/search', function(req, res) {
    var results = req.query;
    //console.log(results);
    res.send(results);
 });
 
 app.listen(process.argv[2]);