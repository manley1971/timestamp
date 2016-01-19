'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

var app = express();
require('dotenv').load();

function getTime(str) {
    let timestamp = Date.parse(str);
    let num = parseInt(str);
    let num2 = Number(str);
    let retval = {
        "unix": null,
        "natural": null
    };
    if (num == num2) {
        let date = new Date(num);
        retval["unix"] = num;
        retval["natural"] = date.toDateString();
    } else if (isNaN(timestamp) == false) {
        let date = new Date(str);
        retval["natural"] = date.toDateString();
        retval["unix"] = date.getTime();
    }

    console.log(retval);
    return JSON.stringify(retval);
}

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/', express.static(process.cwd() + '/public'));
app.get('/:time', function(req, res) {
    let s = req.params.time;
    let retval = getTime(s);
    res.end(retval);
})

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Node.js listening on port ' + port + '...');
});