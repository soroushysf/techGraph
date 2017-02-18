/**
 * Created by soroush on 1/24/17.
 */


function callingDBNames(queryData, request) {

console.log(queryData);

        var options = {
            url:  'http://localhost:8060/orient',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'cache-control': 'no-cache'
            },
            body : {
              input : queryData["nodeDependencies"]
            },
            auth: {
                username: 'root',
                password: 'root'
            },
            json:true

        };


       return request(options, function (err, res, body) {
            return body;
        });








}

module.exports = {
    callingDBNames : callingDBNames
};