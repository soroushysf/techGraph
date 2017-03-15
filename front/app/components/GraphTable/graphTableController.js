/**
 * Created by soroush on 12/18/16.
 */

app.controller('graphTableController', function ($scope, d3Node) {

    $scope.graphTableTitle = 'Graph Table';
    
    $scope.$on("graphTableData", function (event, data) {

        var crNodes;

        crNodes = d3Node.createNode(data["nodeDp"]);

        $scope.createdNodes = crNodes;
    });


    $scope.currentPage = 1;



});