/**
 * Created by soroush on 3/18/17.
 */

app.service('dataFormCtrlFunc', function ($rootScope, searchModel, d3Link, d3Node) {
    var dataFormCtrlFunc = this;

    dataFormCtrlFunc.onEventFunc = function (graphData) {
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

                $rootScope.$emit("fillGraphData", successData.fetchedData);
            })

            .catch(function (data, status, headers, config) {
                console.log(status);
            })
    }
});