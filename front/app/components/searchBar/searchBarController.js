/**
 * Created by soroush on 12/7/16.
 */


app.controller('searchBarCtrl', function ($scope, searchModel) {

    $scope.searchTitle = "Enter your query...";

    $scope.sendData = function (field) {
        var sendingData ={
            qry :  JSON.stringify(field.queryInput),
            limit : field.queryLimit
            }
            ;


        searchModel.getGraphNode(sendingData)

            .success(function (data, status, headers, config) {

                console.log(data);
                $scope.$emit("fillGraphData", data);

            })
            .error(function (data, status, headers, config) {
                console.log(status);
            });


    }



});
