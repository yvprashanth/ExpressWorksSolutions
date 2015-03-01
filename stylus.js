 var express = require('express');
 var app = express();
 var path = require('path');
 var bodyparser = require('body-parser');
 var stylus = require('stylus');
 
 app.use(require('stylus').middleware(process.argv[3]));
 app.use(express.static(process.argv[3]));
 
 
 app.post('/form', function(req, res) {
    res.send(req.body.str.split('').reverse().join(''));
 });
 
 app.listen(process.argv[2]);