/**
 * Created by soroush on 12/7/16.
 */


app.controller('searchBarCtrl', function ($scope, $http) {
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
                $scope.receivedData = data["result"];
                console.log(data["result"]);
                // console.log(JSON.parse(data));
            })
            .error(function (data, status, headers, config) {
                $scope.status = status;
            })
    }

});
