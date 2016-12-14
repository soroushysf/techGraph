/**
 * Created by soroush on 12/14/16.
 */


module.exports = function (app, path, express, bodyParser) {


    app.use(express.static(path.join(__dirname, '../front')));

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../front', 'index.html'));
    });

    app.post('/queryGraph', function (req, res) {
        var user_id = req.body.id;
        var token = req.body.token;

        res.send(user_id + ' this ' + token);
        console.log(req.body)
    })


}


