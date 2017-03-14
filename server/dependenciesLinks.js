/**
 * Created by soroush on 3/13/17.
 */

function callingDBLinks(queryData, request) {

    var optionsLink;

    optionsLink = {
        url:  encodeURI('http://localhost:2480/query/tech_graph/sql/select from associations where in = '+queryData+' or out = '+queryData+'/1000'),
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
        console.log(JSON.parse(body));
        return body;
    });
}

module.exports = {
    callingDBLinks : callingDBLinks
};