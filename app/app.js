'use strict';

/* Requires */
var express = require('express');
var http = require('http');
var path = require('path');

/* Variables */
var app = express();
var host = 'localhost';
var port = process.env.NODE_PORT || 3000;



//check if server is already running
http.get({host: host, port: port}, function() {
    console.log('server is running, redirecting to localhost');
    if (window.location.href.indexOf('localhost') < 0) {
        window.location = 'http://localhost:' + app.get('port');
    }
}).on('error', function() {
    app.use(express.static(path.join(process.cwd(), 'public')));
    app.set('views', path.join(process.cwd(), 'public/views'));
    app.set('view engine', 'jade');

// load route
    app.use('/', require('./controllers')());

    console.log('Application server starting on port :', port);
    app.listen(port);
    console.log('server created');
    if (window.location.href.indexOf('localhost') < 0) {
        window.location = 'http://localhost:' + port;
    }
});
