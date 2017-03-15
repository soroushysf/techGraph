/**
 * Created by soroush on 3/15/17.
 */


function callingDBTraverse(queryData, request) {

    var optionsLink;
    optionsLink = {
        url:  encodeURI('http://localhost:2480/query/tech_graph/sql/traverse * from '+queryData+' while $depth <= 1/1000'),
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
        auth: {
            username: 'root',
            password: 'root'
        }
    };

    return request(optionsLink, function (err, res, body) {
        return body;
    });
}

module.exports = {
    callingDBTraverse : callingDBTraverse
};