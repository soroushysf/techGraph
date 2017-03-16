/**
 * Created by soroush on 12/11/16.
 */

app.controller('graphController', function ($scope, searchModel, traverseModel, d3Node, d3Link) {

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


                console.log(graphData[1]);

                graphData[1] = d3Node.createNode(graphData[1]);

                graphData[2] = d3Link.filterValue(d3Link.createLinkDoubleCLick(graphData[2]), 0.2);

                //------filtering ended---------//
                successData.fetchedData["prevNodes"] = graphData[1];
                successData.fetchedData["prevLinks"] = graphData[2];

                $scope.$emit("fillGraphData", successData.fetchedData);
            })

            .catch(function (data, status, headers, config) {
                console.log(status);
            })
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


        $('#weightBtn').removeClass('btn-success').addClass('btn-default');
        $('#weightBtn').html('Off');

        console.log(data["crLinks"]);
        console.log(data["crNodes"]);

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