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
    Promise = require("bluebird")
    ;





app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var DB = require("./DBAccess"),
    depNames = require("./dependenciesNames")
    ;


var router = require("./router")(app, path, express, bodyParser, DB, depNames, request, Promise);







app.listen(3000, function () {
    console.log("app is listening on port 3000");
});
