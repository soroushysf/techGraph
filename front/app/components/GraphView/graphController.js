/**
 * Created by soroush on 12/11/16.
 */

app.controller('graphController', function ($scope, $rootScope, searchModel, d3Node, d3Link) {

    var graphCtrl = this;
    $scope.graphViewTitle = "Graph View";


    // declared in graph directive (graphData => 0: titles, 1: nodes, 2: links)
    $scope.$on("dataFromCtrl",function (event ,graphData) {
        var sendingData ={
            qry :  JSON.stringify(graphData[0]),
            limit : 1
        };

        searchModel.getGraphNode(sendingData)

            .success(function (data, status, headers, config) {

                var successData = this;
                successData.fetchedData = data;

                //filtering data to draw the new graph


                graphData[1] = d3Node.createNode(graphData[1]);

                graphData[2] = d3Link.filterValue(d3Link.createLinkDoubleCLick(graphData[2]));

                //------filtering ended---------//
                successData.fetchedData["prevNodes"] = graphData[1];
                successData.fetchedData["prevLinks"] = graphData[2];

                $scope.$emit("fillGraphData", successData.fetchedData);
            })

            .error(function (data, status, headers, config) {
                console.log(status);
            })
    });

    //creating links for d3 to understand and draw

    graphCtrl.createdLinks = d3Link.createLink(newLinks);

    graphCtrl.createdLinks = d3Link.filterValue(graphCtrl.createdLinks);

    //creating nodes for d3 to understand and draw
    graphCtrl.createdNodes = d3Node.createNode(newNodes);


    graphCtrl.createdLinks.forEach(function (link) {
        graphCtrl.createdNodes.forEach(function (node) {
            if(node.id == link.source){
                node.edgeCount++;
            }
        })


    });

    $scope.createdLinks =  graphCtrl.createdLinks;
    console.log(d3Node.filterNodes(graphCtrl.createdNodes, graphCtrl.createdLinks));
    $scope.createdNodes = d3Node.filterNodes(graphCtrl.createdNodes, graphCtrl.createdLinks);

    $scope.nodeCounts = graphCtrl.createdNodes.length;
    $scope.linkCounts = graphCtrl.createdLinks.length;


    //gets this event from main controller
    $scope.$on("graphControllerData", function (event, data) {


        $('#weightBtn').removeClass('btn-success').addClass('btn-default');
        $('#weightBtn').html('Off');


        $scope.createdLinks = data["crLinks"];
        $scope.createdNodes = d3Node.filterNodes(data["crNodes"], data["crLinks"]);

        $scope.createdLinks.forEach(function (link) {
            $scope.createdNodes.forEach(function (node) {
                if (node.id == link.source || node.id == link.target) {
                    node.edgeCount++;
                }
            })
        });

        $scope.nodeCounts = $scope.createdNodes.length;
        $scope.linkCounts = $scope.createdLinks.length;
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