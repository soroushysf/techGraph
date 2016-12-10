/**
 * Created by soroush on 12/7/16.
 */



app.controller('mainCtrl', function ($scope) {
    $scope.title = "Tech mining graph";
    $scope.isActive = false;
    $scope.activeLi = function () {
        $scope.isActive = !$scope.isActive;
    }




    $(".leftMenu").height($(".container-fluid").height());
    $(".mainSection").height($(".container-fluid").height());
});

