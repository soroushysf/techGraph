/**
 * Created by soroush on 3/16/17.
 */

app.controller('searchTechsCtrl', function ($scope, $location, nodeNamesModel) {

    $scope.inputs = [{}];
    $scope.itemValue = [];
    $scope.createdLinks = [], $scope.createdNodes = [];
    $scope.addField=function(){
        if($scope.inputs.length < 10) {
            $scope.inputs.push({})
        }
    };
    $scope.deleteField=function(){
        if($scope.inputs.length < 10) {
            $scope.inputs.splice(0,1);
            $scope.itemValue.splice(0,1);
        }
    };
    
    
    $scope.searchGraph = function (view) {

       var sendingData =  {
         nodeNames : $scope.itemValue.map(function (el) {
             return JSON.stringify(el);
         })
       };

        nodeNamesModel.getGraphNodeId(sendingData)
            .success(function (result) {
                console.log(result);
                $location.path(view);


            })
            .catch(function (err, status) {
                console.log(status);
            });
    };


    $(".searchTech").height(($(".container-fluid").height())*0.87);
});