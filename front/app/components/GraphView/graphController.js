/**
 * Created by soroush on 12/11/16.
 */

app.controller('graphController', function ($scope, $rootScope) {


    $scope.graphViewTitle = "Graph View";


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