/**
 * Created by soroush on 3/15/17.
 */


app.service('traverseModel', function ($http) {

    var traverseData = this;

    traverseData.getGraphNode = function (sendingData) {
        return $http({
            url : 'http://localhost:3000/traverseGraph',
            method : 'POST',
            data : sendingData,
            headers : {'Content-Type': 'application/json'}
        });

    }

});