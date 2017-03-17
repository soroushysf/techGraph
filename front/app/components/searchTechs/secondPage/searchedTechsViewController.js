/**
 * Created by soroush on 3/17/17.
 */

app.controller('searchedTechsViewCtrl', function ($scope) {
    $scope.createdLinks = [] ; $scope.createdNodes = [];

    $scope.$on('searchedGraphDataFromMainCtrl',function (event, data) {
        console.log(data);
        $scope.createdLinks = data["links"];
        $scope.createdNodes = data["nodes"];

    });
        $(".searchTech").height(($(".container-fluid").height())*0.87);

});