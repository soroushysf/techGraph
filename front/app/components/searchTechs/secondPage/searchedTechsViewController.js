/**
 * Created by soroush on 3/17/17.
 */

app.controller('searchedTechsViewCtrl', function ($scope, dataFormCtrlFunc, graphCtrlDataFunc) {
    $scope.createdLinks = [] ; $scope.createdNodes = [];

    $scope.$on('searchedGraphDataFromMainCtrl',function (event, data) {
        console.log(data);
        $scope.createdLinks = data["links"];
        $scope.createdNodes = data["nodes"];
        $scope.nodeCounts = data["nodes"].length;
        $scope.linkCounts = data["links"].length;
        $scope.searchedTechs = data["searchedTechNames"];

    });


    $scope.$on("dataFromCtrl",function (event ,graphData) {
        dataFormCtrlFunc.onEventFunc(graphData);
    });


    $scope.$on("graphControllerData", function (event, data) {

        var graphData = graphCtrlDataFunc.onEventFunc(data);


        $scope.createdLinks = graphData.createdLinks;
        $scope.createdNodes = graphData.createdNodes;
        $scope.nodeCounts = graphData.createdNodes.length;
        $scope.linkCounts = graphData.createdLinks.length;
    });

    $scope.weightToggle = function () {
        $('#weightBtn').toggleClass('btn-default').toggleClass('btn-success');

        if($('#weightBtn').hasClass('btn-success')){
            $('#weightBtn').html('On');
        } else {
            $('#weightBtn').html('Off')
        }
        $scope.$broadcast("weightToggle");
    };

    $(".searchTech").height(($(".container-fluid").height())*0.94);
    $(".searchTech").width(($(".container-fluid").width())*0.78);

});