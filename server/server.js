/**
 * Created by soroush on 12/6/16.
 */
var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    path = require("path"),
    OrientDB = require("orientjs"),
    http = require("http"),
    request = require("request-promise"),
    Promise = require("bluebird"),
    morgan      = require('morgan'),
    mongoose    = require('mongoose'),
    passport	= require('passport')
;

var DB = require("./DBAccess"),
    depNames = require("./dependenciesNames"),
    depLinks = require("./dependenciesLinks"),
    traverseDB = require("./traverseGraph"),
    User = require('./models/user'),
    config = require('./config/database')

;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));

// Use the passport package in our application
app.use(passport.initialize());




require("./router")(app, path, express, bodyParser, DB, depNames, depLinks , traverseDB, request, Promise);

require('./userRegister')(express, mongoose, app, config, passport, User);
require('./userLogin')(express, mongoose, app, config, passport, User);





app.listen(3000, function () {
    console.log("app is listening on port 3000");
});
