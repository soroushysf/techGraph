/**
 * Created by soroush on 12/18/16.
 */

app.controller('graphTableController', function ($scope) {
    $scope.graphTableTitle = 'Graph Table';



    $scope.createdNodes = newNodes.map(function (node) {
        return {
            'id' : node.id,
            'title' : node.term_title,
            'results_returned' : node.results_returned,
            'completed' : node.completed,
            'fis_status' : node.fis_status
        }
    })



});