/**
 * Created by soroush on 3/11/17.
 */
app.service('searchModel', function ($http) {
    
    var searchData = this;
    
    searchData.getGraphNode = function (sendingData) {
       return $http({
            url : 'http://localhost:3000/queryGraph',
            method : 'POST',
            data : sendingData,
            headers : {'Content-Type': 'application/json'}
        });

    }
    
});