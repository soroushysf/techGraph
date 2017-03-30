/**
 * Created by soroush on 3/16/17.
 */

app.service('httpRequestToServer', function ($http) {

    var httpRequestToServer = this;

    httpRequestToServer.getData = function (sendingData, path) {
        return $http({
            url : 'http://localhost:3000/'+path,
            method : 'POST',
            data : sendingData,
            headers : {'Content-Type': 'application/json'}
        });

    }
})