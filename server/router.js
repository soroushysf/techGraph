/**
 * Created by soroush on 12/14/16.
 */


module.exports = function (app, path, express, bodyParser, DB, depNames, depLinks, traverseDB, request, Promise) {

    app.use(express.static(path.join(__dirname, '../front')));

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../front', 'index.html'));
    });

    function removeDuplicates(arr, prop) {
        var new_arr = [];
        var lookup  = {};

        for (var i in arr) {
            lookup[arr[i][prop]] = arr[i];
        }

        for (i in lookup) {
            new_arr.push(lookup[i]);
        }

        return new_arr;
    }


    app.post('/nodeNames', function (req, res) {
        var nodeNames = req.body, databaseRequests = [];

        for(var i = 0; i < nodeNames["nodeNames"].length; i++) {
            databaseRequests.push(
                DB.callingDB(nodeNames["nodeNames"][i], request)
            );
        }
        Promise.all(databaseRequests)
            .then(function (result) {
                var nodeResult = result.map(function (el) {
                    return JSON.parse(el)["result"][0]["@rid"].replace(/#/g, '');
                });
                //convert data for traverse to a proper query type
                // var nodeIDs ="[" +
                //         result.map(function (node) {
                //             return  node["result"][0]["@rid"].replace(/#/g, '');
                //         })
                //             .join(" ")
                //             .replace(/\s+/g, ", ")
                //         + "]"
                //     ;
                //---------------------------
                databaseRequests = [];

                console.log(nodeResult);

                for(var i = 0; i < nodeResult.length; i++) {
                    databaseRequests.push(
                        traverseDB.callingDBTraverse(nodeResult[i], nodeNames["traverseDepth"],request)
                    );
                }
                Promise.all(databaseRequests)
                    .then(function (result) {
                        // console.log(JSON.parse(result[1]));
                        result = result.map(function(el){
                            return JSON.parse(el)["result"];
                        });
                        if(result[1]) {
                            for (var i = 1; i < result.length; i++) {
                                result[i] = result[i].concat(result[i-1]);
                            }
                        }
                        result = result.splice(result.length - 1, result.length)[0];
                        // console.log(result);

                        var graph = {techs : [], associations : []};

                        graph.techs = result.filter(function (el) {
                            return( el["@class"] == "techs");
                        });

                        graph.techs = removeDuplicates(graph.techs, "tech_title");

                        graph.associations = result.filter(function (el) {
                            return( el["@class"] == "associations");
                        });
                        graph.associations = removeDuplicates(graph.associations, "@rid");

                        res.send(graph);
                            // console.log(graph.techs);
                            // console.log(graph.associations);

                        });
                // traverseDB.callingDBTraverse(nodeIDs, nodeNames["traverseDepth"],request)
                //     .then(function (result) {
                //         result = JSON.parse(result);
                //         var graph = {techs : {}, associations : {}};
                //
                //         graph.techs = result["result"].filter(function (el) {
                //             return( el["@class"] == "techs");
                //         });
                //         graph.associations = result["result"].filter(function (el) {
                //             return( el["@class"] == "associations");
                //         });
                //         res.send(graph);
                //     })
                //     .catch(function (err, st) {
                //         console.log(st);
                //         res.send(err);
                //     })
            })
            .catch(function (err, st) {
                console.log(st);
                res.send(err);
            })
    });

    app.post('/traverseGraph', function (req, res) {
        var queryData = req.body;
        traverseDB.callingDBTraverse(queryData["req"], 1, request)
            .then(function (result) {
                result = JSON.parse(result);
                var graph = {techs : {}, associations : {}};

                graph.techs = result["result"].filter(function (el) {
                    return( el["@class"] == "techs");
                });
                graph.associations = result["result"].filter(function (el) {
                    return( el["@class"] == "associations");
                });
                res.send(graph);
            })
            .catch(function (err, st) {
                res.send(st);
            })
    });

    app.post('/queryGraph', function (req, res) {

        var queryData = req.body;
        DB.callingDB(queryData["qry"], request)
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

                                res.send(finalResult);
                            });
                    })
            })
            .catch(function (err) {
                res.send(err);
            })


    });




}


