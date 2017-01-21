/**
 * Created by soroush on 1/19/17.
 */

function callingDB(queryData, request) {

    var options = {
        url:  encodeURI('http://localhost:2480/query/tech_graph/sql/select from techs where tech_title='+queryData.qry+'/'+queryData.limit),
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
        auth: {
            username: 'root',
            password: 'root'
        }
    };

    return request(options, function (err, res, body) {
        return body;
    })
        .then(function (result) {
        console.log(result);
        return result;
    })
        .catch(function (err) {
            console.log(err);
        });

console.log(queryData.qry);




}

module.exports = {
    callingDB : callingDB
};