/**
 * Created by soroush on 3/18/17.
 */

app.service('graphCtrlDataFunc', function (d3Node) {

    var graphCtrlDataFunc = this;
    graphCtrlDataFunc.onEventFunc = function (data) {
        var eventFunc = this;
        $('#weightBtn').removeClass('btn-success').addClass('btn-default');
        $('#weightBtn').html('Off');

        console.log(data["crLinks"]);
        console.log(data["crNodes"]);

        eventFunc.createdLinks = data["crLinks"];
        eventFunc.createdNodes = d3Node.filterNodes(data["crNodes"], data["crLinks"]);

        eventFunc.createdLinks.forEach(function (link) {
            eventFunc.createdNodes.forEach(function (node) {
                if (node.id == link.source || node.id == link.target) {
                    node.edgeCount++;
                }
            })
        });

        eventFunc.nodeCounts = eventFunc.createdNodes.length;
        eventFunc.linkCounts = eventFunc.createdLinks.length;

        return eventFunc;
    };

});