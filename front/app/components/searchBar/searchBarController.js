/**
 * Created by soroush on 12/7/16.
 */


app.controller('searchBarCtrl', function ($scope) {
    $scope.searchTitle = "Enter your query...";

    $scope.graphViewTitle = "Graph View";




    $(".graphView").height(($(".container-fluid").height())*0.7);
});
