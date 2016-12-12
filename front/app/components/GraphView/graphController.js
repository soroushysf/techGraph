/**
 * Created by soroush on 12/11/16.
 */

app.controller('graphController', function ($scope) {


    $scope.graphViewTitle = "Graph View";

    // $scope.createdLinks = links;
    // $scope.createdNodes = nodes;


    $scope.createdLinks = newLinks.map(function (link) {
        return {
            'source' : link.term_id1,
            'target' : link.term_id2,
            'value' : link.term_id2
        }
    });
    $scope.createdNodes = newNodes.map(function (node) {
        return {
            'id' : node.id,
            'title' : node.term_title
        }
    })

    console.log($scope.createdLinks);
    console.log($scope.createdNodes);





    $(".graphView").height(($(".container-fluid").height())*0.7);



    
});