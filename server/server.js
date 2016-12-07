/**
 * Created by soroush on 12/6/16.
 */
var express = require("express")
    path = require("path")
    ;

var app = express();

app.use(express.static(path.join(__dirname, '../front')));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../front', 'index.html'));
});


app.listen(3000, function () {
    console.log("app is listening on port 3000");
});
