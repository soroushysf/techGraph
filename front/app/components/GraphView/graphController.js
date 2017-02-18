/**
 * Created by soroush on 12/11/16.
 */

app.controller('graphController', function ($scope, $rootScope, $http) {


    $scope.graphViewTitle = "Graph View";

    $scope.$on("dataFromCtrl",function (event ,x) {
        var dataSent ={
                qry :  JSON.stringify(x[0]),
                limit : 1
            }
            ;
        $http({
            url : 'http://localhost:3000/queryGraph',
            method : 'POST',
            data : dataSent,
            headers : {'Content-Type': 'application/json'}
        })
            .success(function (data, status, headers, config) {
                $scope.fetchedData = data;
                x[1] = x[1].map(function (el) {
                    return {
                        'id' : el.id,
                        'title' : el.title,
                        'edgeCount' : el.edgeCount
                    }
                });
                x[2] = x[2].map(function (el) {
                    return {
                        'source' : el.source["id"],
                        'target' : el.target["id"],
                        'value' : el.value
                    }
                });
                $scope.fetchedData["prevNodes"] = x[1];
                $scope.fetchedData["prevLinks"] = x[2];
                $scope.$emit("fillGraphData", $scope.fetchedData);
            })
            .error(function (data, status, headers, config) {
                console.log(status);
            })
    });
    //creating links for d3 to understand and draw

    $scope.createdLinksTemp = newLinks.map(function (link) {
            return {
                'source': link.term_id1,
                'target': link.term_id2,
                'value': Number(link["weighted_similarity"])
            }

    });
    $scope.createdLinks = $scope.createdLinksTemp.filter(function (link) {
        if(link.value > 0.14)
            return true;
        else
            return false;
    })

    //creating nodes for d3 to understand and draw
    $scope.createdNodes = newNodes.map(function (node) {
        return {
            'id' : node.id,
            'title' : node.term_title,
            'edgeCount' : 0
        }
    });
    $scope.createdLinks.forEach(function (link) {
        $scope.createdNodes.forEach(function (node) {
            if(node.id == link.source){
                node.edgeCount++;
            }
        })


    });
    $scope.nodeCounts = $scope.createdNodes.length;
    $scope.linkCounts = $scope.createdLinks.length;
    
    $scope.$on("graphControllerData", function (event, data) {


        $scope.createdLinks = data["crLinks"];
        $scope.createdNodes = data["crNodes"];
            $scope.createdLinks.forEach(function (link) {
                $scope.createdNodes.forEach(function (node) {
                    if (node.id == link.source || node.id == link.target) {
                        node.edgeCount++;
                    }
                })
            });

        $scope.nodeCounts = $scope.createdNodes.length;
        $scope.linkCounts = $scope.createdLinks.length;
    });

    $(".graphView").height(($(".container-fluid").height())*0.7);

});