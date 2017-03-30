/**
 * Created by soroush on 3/18/17.
 */

app.service('dataFormCtrlFunc', function ($rootScope, httpRequestToServer, d3Link, d3Node) {
    var dataFormCtrlFunc = this;
    var threshHold = 0.2;

    dataFormCtrlFunc.setThreshHold = function (value) {
        console.log("setter :");
        console.log(value);

        threshHold = value;
    };

    dataFormCtrlFunc.getThreshHold = function () {
        console.log("getter is :");
        console.log(threshHold);

        return threshHold;
    };
    dataFormCtrlFunc.onEventFunc = function (graphData) {
        var sendingData ={
            qry :  JSON.stringify(graphData[0]),
            limit : 1
        };
        httpRequestToServer.getData(sendingData, 'queryGraph')

            .success(function (data, status, headers, config) {

                var successData = this;
                successData.fetchedData = data;

                //filtering data to draw the new graph

                console.log(threshHold);


                graphData[1] = d3Node.createNode(graphData[1]);

                graphData[2] = d3Link.filterValue(d3Link.createLinkDoubleCLick(graphData[2]), dataFormCtrlFunc.getThreshHold());

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