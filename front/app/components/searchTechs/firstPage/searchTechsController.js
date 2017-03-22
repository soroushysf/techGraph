/**
 * Created by soroush on 3/16/17.
 */

app.controller('searchTechsCtrl', function ($scope, $location, nodeNamesModel, d3Node, d3Link) {
    var searchTechCtrl = this;

    $scope.inputs = [{},{}];
    $scope.itemValue = [];

    $scope.addField=function(){
        if($scope.inputs.length < 10) {
            $scope.inputs.push({})
        }
    };
    $scope.deleteField=function(){
        if( 2 < $scope.inputs.length) {
            $scope.inputs.splice(0,1);
            $scope.itemValue.splice( $scope.itemValue.length-1,1);
        }
    };

    $scope.searchGraph = function (view) {

       var sendingData =  {
         nodeNames : $scope.itemValue.map(function (el) {
             return JSON.stringify(el);
         }),
           traverseDepth : typeof $scope.traverseDepth !== 'undefined' ? $scope.traverseDepth : 1
       };

        nodeNamesModel.getGraphNodeId(sendingData)
            .success(function (result) {
                var graphData = {};
                console.log(result);

                graphData.nodes = d3Node.createTraverseNode(result["techs"]);
                graphData.links = d3Link.createLink(result["associations"]);
                graphData.links = d3Link.filterValue(d3Link.filterLink(graphData.links, graphData.nodes), $scope.threshHold);

                graphData.searchedTechNames = $scope.itemValue;

                //send data to second page controller by main controller
                $location.path(view);
                $scope.$emit('searchedGraphData', graphData);


            })
            .catch(function (err, status) {
                console.log(status);
            });
    };

    $scope.createdLinks = [], $scope.createdNodes = [];
});