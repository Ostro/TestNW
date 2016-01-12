'use strict';

var router = require('express').Router();

module.exports = function() {
    router.get('/', function(req, res){
        res.render('index');
    });

    router.get('/plop', function(req, res) {
        res.send('It works !!!');
    });

    return router;
};
