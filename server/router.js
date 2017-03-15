/**
 * Created by soroush on 12/14/16.
 */


module.exports = function (app, path, express, bodyParser, DB, depNames, depLinks, traverseDB, request, Promise) {

    app.use(express.static(path.join(__dirname, '../front')));

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../front', 'index.html'));
    });

    app.post('/traverseGraph', function (req, res) {
        var queryData = req.body;
        console.log(req.body);
        traverseDB.callingDBTraverse(queryData["req"], request)
            .then(function (result) {
                result = JSON.parse(result);
                var graph = {techs : {}, associations : {}};

                graph.techs = result["result"].filter(function (el) {
                    return( el["@class"] == "techs");
                });
                graph.associations = result["result"].filter(function (el) {
                    return( el["@class"] == "associations");
                });
                res.send(result);
            })
            .catch(function (err) {
                res.send(err);
            })
    });

    app.post('/queryGraph', function (req, res) {

        var queryData = req.body;
        DB.callingDB(queryData, request)
            .then(function (result) {
                var centerNodeId = JSON.parse(result), finalResult;
                var dataSend = {
                    nodeId : centerNodeId["result"][0]["@rid"].replace(/#/g, ''),
                    nodeTitle : centerNodeId["result"][0]["tech_title"],
                    nodeDependencies : centerNodeId["result"][0]["out"].concat(centerNodeId["result"][0]["in"]).map(function (id) {
                        return id.replace(/#/g, '');
                    })
                };

                depNames.callingDBNames(dataSend, request, Promise)
                    .then(function (nodes) {

                        depLinks.callingDBLinks(dataSend.nodeId, request)
                            .then(function (links) {
                                finalResult = {
                                    nodeDp : nodes,
                                    centerNode : centerNodeId,
                                    links : JSON.parse(links)
                                };
                                console.log(finalResult);

                                res.send(finalResult);

                            });



                    })



            })
            .catch(function (err) {
                res.send(err);
            })


    });




}


