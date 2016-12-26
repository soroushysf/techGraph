/**
 * Created by soroush on 12/11/16.
 */

app.controller('graphController', function ($scope) {


    $scope.graphViewTitle = "Graph View";



    //creating links for d3 to understand and draw

    $scope.createdLinks = newLinks.map(function (link) {
        return {
            'source' : link.term_id1,
            'target' : link.term_id2,
            'value' : link.term_id2
        }
    });
    //creating nodes for d3 to understand and draw
    $scope.createdNodes = newNodes.map(function (node) {
        return {
            'id' : node.id,
            'title' : node.term_title,
            'edgeCount' : 0
        }
    });

    //counting edges for every node
    $scope.createdLinks.forEach(function (link) {
        $scope.createdNodes.forEach(function (node) {
           if(node.id == link.source){
               node.edgeCount++;
           }
       })


    });

    $scope.nodeCounts = $scope.createdNodes.length;
    $scope.linkCounts = $scope.createdLinks.length;

    console.log($scope.createdLinks);
    console.log($scope.createdNodes);





    $(".graphView").height(($(".container-fluid").height())*0.7);



    
});