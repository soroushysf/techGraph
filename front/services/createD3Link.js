/**
 * Created by soroush on 3/11/17.
 */

app.service('d3Link', function () {
    var d3Link = this;

    d3Link.createLink = function (linkData) {

        return linkData.map(function (link) {
            return {
                'source' :  link.term_id1 || link.source["id"] ,
                'target' :  link.term_id2 || link.target["id"] ,
                'value' : Number(link["weighted_similarity"]) || link.value
            };
        });

    }

    d3Link.filterValue = function (linkData) {
        return linkData.filter(function (link) {
            return (link.value > 0.14);
        });
    }

    d3Link.linkDependencies = function (linkData, centerNodeId, direction) {
        var newLinks = [], i = 0;

        if (direction === "in") {
            console.log("1");
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
            console.log("2");
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