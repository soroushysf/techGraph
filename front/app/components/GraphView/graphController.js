/**
 * Created by soroush on 12/11/16.
 */

app.controller('graphController', function ($scope) {


    $scope.graphViewTitle = "Graph View";

    $scope.viewNodes = nodes;
    $scope.viewLinks = links;






    $(".graphView").height(($(".container-fluid").height())*0.7);



    
});