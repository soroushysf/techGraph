/**
 * Created by soroush on 3/16/17.
 */

app.service('nodeNamesModel', function ($http) {

    var nodeNames = this;

    nodeNames.getGraphNodeId = function (sendingData) {
        return $http({
            url : 'http://localhost:3000/nodeNames',
            method : 'POST',
            data : sendingData,
            headers : {'Content-Type': 'application/json'}
        });

    }
})