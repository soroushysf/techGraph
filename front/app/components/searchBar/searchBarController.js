/**
 * Created by soroush on 12/7/16.
 */


app.controller('searchBarCtrl', function ($scope, $http) {
    $scope.searchTitle = "Enter your query...";

    $scope.sendData = function () {
        var myData = {id : 1, token : 'gtr'};
        $http({
            url : 'http://localhost:3000/queryGraph',
            method : 'POST',
            data : myData,
            headers : {'Content-Type': 'application/json'}
        })
            .success(function (data, status, headers, config) {
                $scope.receivedData = data;
                console.log(data);
            })
            .error(function (data, status, headers, config) {
                $scope.status = status;
            })
    }

});
