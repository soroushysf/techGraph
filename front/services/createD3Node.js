/**
 * Created by soroush on 3/11/17.
 */

app.service('d3Node', function () {
    var d3Node = this;
    
    d3Node.createNode = function (nodesData) {

        return nodesData.map(function (node) {
            return {
                'id' :  node.id || node["result"][0]["@rid"].replace(/#|:/g,''),
                'title' : node.title || node["result"][0]["tech_title"],
                'edgeCount' : node.edgeCount || 0
            };
        });

    };





});