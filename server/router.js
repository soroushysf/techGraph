/**
 * Created by soroush on 12/14/16.
 */


module.exports = function (app, path, express, bodyParser, DB, request) {


    app.use(express.static(path.join(__dirname, '../front')));

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../front', 'index.html'));
    });

    app.post('/queryGraph', function (req, res) {

        var queryData = req.body;
        DB.callingDB(queryData, request).then(function (result) {
            res.send( result );

        })



    })


}


