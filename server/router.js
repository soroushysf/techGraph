/**
 * Created by soroush on 12/14/16.
 */


module.exports = function (app, path, express, bodyParser, DB, depNames, request, Promise) {

    app.use(express.static(path.join(__dirname, '../front')));

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../front', 'index.html'));
    });

    app.post('/queryGraph', function (req, res) {

        var queryData = req.body;
        DB.callingDB(queryData, request).then(function (result) {
            var centerNodeId = JSON.parse(result), finalResult;
            var dataSend = {
                nodeTitle : centerNodeId["result"][0]["tech_title"],
                nodeDependencies : centerNodeId["result"][0]["out"].concat(centerNodeId["result"][0]["in"]).map(function (id) {
                    return id.replace(/#/g, '');
                })
            };
            depNames.callingDBNames(dataSend, request, Promise)
                .then(function (rs) {
                    finalResult = {
                        nodeDp : rs,
                        centerNode : centerNodeId,
                    }
                    res.send(finalResult);

                });


        });


    });




}


