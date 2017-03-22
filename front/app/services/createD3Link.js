/**
 * Created by soroush on 3/11/17.
 */

app.service('d3Link', function () {
    var d3Link = this;

    d3Link.createLink = function (linkData) {

        return linkData.map(function (link) {
            return {
                'source' :  link.term_id1 ||  link["out"].replace(/#|:/g, '')  ,
                'target' :  link.term_id2 ||  link["in"].replace(/#|:/g, '') ,
                'value' : Number(link["weighted_similarity"]) || link["weight"]
            };
        });

    };

    d3Link.createLinkDoubleCLick = function (linkData) {

        return linkData.map(function (link) {
            return {
                'source' :    link.source["id"]  ,
                'target' :   link.target["id"] ,
                'value' :  link["value"]
            };
        });

    };
    d3Link.filterValue = function (linkData, filterThreshHold) {
        filterThreshHold = typeof filterThreshHold !== 'undefined' ? filterThreshHold : 0.2;
        return linkData.filter(function (link) {
            return (link.value > filterThreshHold);
        });
    };

    // deletes edges that we have no nodes for them
    d3Link.filterLink = function (links, nodes) {
        nodes = nodes.map(function (node) {
           return node.id;
        });
        return links.filter(function (link) {
            var checkLink = false;
                if(nodes.indexOf(link.source) != -1 && nodes.indexOf(link.target) != -1) {
                    checkLink = true;
            }
            return checkLink;
        });
    };

    d3Link.linkDependencies = function (linkData, centerNodeId, direction) {
        var newLinks = [], i = 0;

        if (direction === "in") {
            linkData.forEach(function (el) {
                newLinks[i] = {
                    'source': el.replace(/#|:/g, ''),
                    'target': centerNodeId,
                    'value': 1 / 1.5 * (Math.random() * (0.3 - 0.1) + 0.2).toFixed(4)
                };
                i++;
            });
        }
        else {
            linkData.forEach(function (el) {
                newLinks[i] = {
                    'source': centerNodeId,
                    'target': el.replace(/#|:/g, ''),
                    'value': 1 / 1.5 * (Math.random() * (0.3 - 0.1) + 0.2).toFixed(4)
                };
                i++;
            });
        }
        return newLinks;
    }

});