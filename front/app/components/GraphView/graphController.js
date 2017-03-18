/**
 * Created by soroush on 12/11/16.
 */

app.controller('graphController', function ($scope, searchModel, traverseModel, d3Node, d3Link, dataFormCtrlFunc, graphCtrlDataFunc) {

    var graphCtrl = this;
    $scope.graphViewTitle = "Graph View";


    // declared in graph directive (graphData => 0: titles, 1: nodes, 2: links)
    $scope.$on("dataFromCtrl",function (event ,graphData) {

        dataFormCtrlFunc.onEventFunc(graphData);

    });


    // read from config file
    graphCtrl.firstData = firstTraverseData;

    traverseModel.getGraphNode(graphCtrl.firstData)
        .success(function (result) {
            graphCtrl.firstNodes = d3Node.createTraverseNode(result["techs"]);
            graphCtrl.firstLinks = d3Link.createLink(result["associations"]);
            graphCtrl.firstLinks = d3Link.filterValue(d3Link.filterLink(graphCtrl.firstLinks, graphCtrl.firstNodes), 0.2);


            $scope.createdLinks =  graphCtrl.firstLinks;
            $scope.createdNodes = graphCtrl.firstNodes;
            $scope.nodeCounts = graphCtrl.firstNodes.length;
            $scope.linkCounts = graphCtrl.firstLinks.length;
        })
        .catch(function (err, status) {
            console.log(status);
        });

    $scope.createdLinks =  [];
    $scope.createdNodes = [];

    // graphCtrl.createdLinks.forEach(function (link) {
    //     graphCtrl.createdNodes.forEach(function (node) {
    //         if(node.id == link.source){
    //             node.edgeCount++;
    //         }
    //     })
    //
    //
    // });
    //


    //gets this event from main controller
    $scope.$on("graphControllerData", function (event, data) {

        var graphData = graphCtrlDataFunc.onEventFunc(data);

        $scope.createdLinks = graphData.createdLinks;
        $scope.createdNodes = graphData.createdNodes
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

    $(".graphView").height(($(".container-fluid").height())*0.87);

});