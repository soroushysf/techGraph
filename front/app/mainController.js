/**
 * Created by soroush on 12/7/16.
 */



app.controller('mainCtrl', function ($scope, $location, $rootScope) {

    $scope.title = "Tech Graph";
    $scope.items = menuItems;
    $scope.graphD = {};

    $rootScope.$on("fillGraphData",  function (event,graphData) {
        $scope.$broadcast("graphTableData", graphData);
        var i = 0 ,crNodes=[], crLinks=[];
        for(var key in graphData["nodeDp"]){
            if(graphData["nodeDp"].hasOwnProperty(key)){
                crNodes[i] = {
                    'id' : graphData["nodeDp"][key][0]["@rid"].replace(/#|:/g,''),
                    'title' : graphData["nodeDp"][key][0]["tech_title"],
                    'edgeCount' : 0
                }
            i++;
            }
        }
        i=0;
        var centerNodeId = graphData["centerNode"]["result"][0]["@rid"].replace(/#|:/g,'');
        crNodes.push({
            'id' : centerNodeId,
            'title' : graphData["centerNode"]["result"][0]["tech_title"],
            'edgeCount' : 0,
            'color' : 0
        });
        graphData["centerNode"]["result"][0]["in"].forEach(function (el) {
            crLinks[i] = {
                'source' : el.replace(/#|:/g, ''),
                'target' : centerNodeId,
                'value' : 1/1.5*(Math.random() * (0.3 - 0.141) + 0.2).toFixed(4)
            }
            i++;
        });
        graphData["centerNode"]["result"][0]["out"].forEach(function (el) {
            crLinks[i] = {
                'source' : centerNodeId,
                'target' : el.replace(/#|:/g, ''),
                'value' : 1/1.5*(Math.random() * (0.3 - 0.141) + 0.2).toFixed(4)
            }
            i++;
        });

        for(var i = 0;  i < crLinks.length; i++) {
            for(var j = 0;j < crNodes.length; j++) {
                if(crLinks[i]['source'] == crNodes[j]['id']){
                    crNodes[j]['color'] = 12;
                }
                else {
                    crNodes[j]['color'] = 5;
                }
            }
        }
        var completeData = {
            crLinks : crLinks,
            crNodes : crNodes
        }
        console.log(crLinks);

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
    }



    $(".leftMenu").height($(".container-fluid").height());
    $(".mainSection").height($(".container-fluid").height());
});

