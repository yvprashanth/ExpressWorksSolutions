 var express = require('express');
 var app = express();
 var path = require('path');
 var bodyparser = require('body-parser')
 app.use(bodyparser.urlencoded({extended: false}));
 
 app.put('/message/:id', function(req, res) {
    var id = req.params.id;
    var str = require('crypto')
                .createHash('sha1')
                .update(new Date().toDateString() + id)
                .digest('hex');
    res.send(str);
 });
 
 app.listen(process.argv[2]);