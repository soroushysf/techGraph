/**
 * Created by soroush on 12/7/16.
 */



app.controller('mainCtrl', function ($scope, $location, d3Node, d3Link) {

    $scope.title = "Tech Graph";
    $scope.items = menuItems;
    $scope.graphD = {};

    $scope.$on("fillGraphData",  function (event,graphData) {
        $scope.$broadcast("graphTableData", graphData);
        var crNodes=[], crLinks=[],centerNodeId;




        crNodes = d3Node.createNode(graphData["nodeDp"]);
        

        centerNodeId = graphData["centerNode"]["result"][0]["@rid"].replace(/#|:/g,'');

        crNodes.push({
            'id' : centerNodeId,
            'title' : graphData["centerNode"]["result"][0]["tech_title"],
            'edgeCount' : 0
        });

        crLinks = d3Link.linkDependencies(graphData["centerNode"]["result"][0]["in"], centerNodeId, "in");

        crLinks = crLinks.concat(crLinks, d3Link.linkDependencies(graphData["centerNode"]["result"][0]["out"], centerNodeId, "out"));



        //filters out repeated nodes and links

        if(graphData["prevNodes"]) {
            console.log(graphData["prevLinks"]);
            for(var i = 0 ; i < crLinks.length; i++) {
               graphData["prevLinks"] = graphData["prevLinks"].filter(function (link) {
                    return !(link["source"] == crLinks[i]["source"] && link["target"] == crLinks[i]["target"]);
                })
            }
            for(var j = 0 ; j < crNodes.length; j++) {
               graphData["prevNodes"] = graphData["prevNodes"].filter(function (node) {
                    return !(node["title"] == crNodes[j]["title"]);
                })
            }
            crLinks = crLinks.concat(graphData["prevLinks"]);
            crNodes = crNodes.concat(graphData["prevNodes"]);
            console.log("links :");
            console.log(crLinks);

        }
        // ----------------------------------------

        var completeData = {
            crLinks : crLinks,
            crNodes : crNodes
        };


        $scope.$broadcast("graphControllerData", completeData);
    });

    $scope.$on('$routeChangeStart', function() {

        switch ($location.path()){
            case '/graphTable' :
                $scope.activeItem = 'item2';
                break;
            case '/Home' :
                $scope.activeItem = 'item1';
                break;
            case '/' :
                $scope.activeItem = 'item1';

        }
    });


    $scope.changeSate = function (item) {
        $scope.activeItem = item.id;
    };
    



    var container = $(".container-fluid");

    $(".leftMenu").height(container.height());
    $(".mainSection").height(container.height());
});

