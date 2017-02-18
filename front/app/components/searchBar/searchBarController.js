/**
 * Created by soroush on 12/7/16.
 */


app.controller('searchBarCtrl', function ($scope, $http, $rootScope) {
    $scope.searchTitle = "Enter your query...";
    $scope.sendData = function (field) {
        var dataSent ={
            qry :  JSON.stringify(field.queryInput),
            limit : field.queryLimit
            }
            ;
        console.log("clicked");
        $http({
            url : 'http://localhost:3000/queryGraph',
            method : 'POST',
            data : dataSent,
            headers : {'Content-Type': 'application/json'}
        })
            .success(function (data, status, headers, config) {
                 $scope.fetchedData = data;
                 $scope.$emit("fillGraphData", $scope.fetchedData);
            })
            .error(function (data, status, headers, config) {
                console.log(status);
            })
    }



});
