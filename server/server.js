/**
 * Created by soroush on 12/6/16.
 */
var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    path = require("path")
    ;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router = require("./router")(app, path, express, bodyParser);







app.listen(3000, function () {
    console.log("app is listening on port 3000");
});
