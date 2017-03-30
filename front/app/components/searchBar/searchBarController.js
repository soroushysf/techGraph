/**
 * Created by soroush on 12/7/16.
 */


app.controller('searchBarCtrl', function ($scope, searchModel, dataFormCtrlFunc) {

    $scope.searchTitle = "Enter your query...";
    $scope.spinner = false;

    $scope.sendData = function (field) {
        var sendingData ={
            qry :  JSON.stringify(field.queryInput),
            queryTh : field.queryThreshHold
            }
            ;
        $scope.spinner = true;

        searchModel.getGraphNode(sendingData)

            .success(function (data, status, headers, config) {
                $scope.spinner = false;
                $scope.$emit("fillGraphData", data);

            })
            .error(function (data, status, headers, config) {
                console.log(status);
            });

        $('#weightBtn').removeClass('btn-success').addClass('btn-default');
        $('#weightBtn').html('Off');

    }



});
