/**
 * Created by soroush on 12/7/16.
 */



app.controller('mainCtrl', function ($scope, $rootScope, $location, d3Node, d3Link, dataFormCtrlFunc) {

    $scope.title = "Tech Graph";
    $scope.items = menuItems;
    $scope.graphD = {};

    $rootScope.$on("fillGraphData",  function (event,graphData) {
        $scope.$broadcast("graphTableData", graphData);
        var crNodes=[], crLinks=[];



        graphData["nodeDp"] = graphData["nodeDp"].concat(graphData["centerNode"]);


        crNodes = d3Node.createNode(graphData["nodeDp"]);

        crLinks = d3Link.filterValue(d3Link.createLink(graphData["links"]["result"]), dataFormCtrlFunc.getThreshHold());





        //filters out repeated nodes and links

        if(graphData["prevNodes"]) {

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
                break;
            case '/searchTechs/first' :
                $scope.activeItem = 'item4';
                break;
            case '/searchTechs/second' :
                $scope.activeItem = 'item4';
                break;

        }
    });

    //send searched techs to searched techs view controller
    $scope.$on('searchedGraphData',function (event, data) {
        //set the trigger when partial(searched techs view controller) has fully changed, so the controller get the event
        $scope.$on('$viewContentLoaded', function(){
            $scope.$broadcast("searchedGraphDataFromMainCtrl", data);
        });

    });


    $scope.changeSate = function (item) {
        $scope.activeItem = item.id;
    };
    



    var container = $(".container-fluid");

    $(".leftMenu").height(container.height());
    $(".mainSection").height(container.height());
});

