/**
 * Created by soroush on 12/11/16.
 */

app.directive('graphView' , function () {

    return {
        link : d3Draw,
        controller : function ($scope) {
          this.sendNodeData = function (title, nodes, links) {
              $scope.$emit("dataFromCtrl",[title, nodes, links]);
          }
        },
        restrict : 'E',
        scope : {
            d3Nodes : '=',
            d3Links : '='
        }
    };


    function d3Draw(scope, element, attr, ctrl) {


        scope.$watchGroup(['d3Links', 'd3Nodes'], function (newValues) {

            d3.select('svg').remove();
            var height = $('.graphWindow').height(),
                width = $('.graphWindow').width();
            var myChart = d3.select(element[0]).append('svg')
                    .style("width", width)
                    .style("height", height)
                    .style("background", "white")
                    .attr('class', 'mainSvg')
                ;
            var nodes = newValues[1], links = newValues[0]
                ;


            myChart = myChart.call(d3.zoom().on("zoom", zoomed)).append("g");


            var color = d3.scaleOrdinal(d3.schemeCategory20);
            /*            var toolTip = d3.select('body').append('div')
             .style('position', 'absolute')
             .style('padding', '5px 10px')
             .style('background', '#303030')
             .style('color', 'white')
             .style('display', 'none')
             .style('border-radius', '5px')
             ;*/



            myChart.append("svg:defs").selectAll("marker")
                .data(["end"])      // Different link/path types can be defined here
                .enter().append("svg:marker")    // This section adds in the arrows
                .attr("id", String)
                .attr("viewBox", "0 -5 10 10")
                .attr("refX", 100)
                .attr("refY", 0)
                .attr("markerWidth", 26)
                .attr("markerHeight", 36)
                .attr("orient", "auto")
                .append("svg:path")
                .attr("d", "M0,-5L10,0L0,5");


            var simulation = d3.forceSimulation(nodes)
                    .force("link", d3.forceLink().id(function (d) {
                        return d.id
                    })
                        .distance(function (d) {

                            return d.value * 1500
                        }))
                    .force("charge", d3.forceManyBody().strength(-1000))
                    .force("center", d3.forceCenter(width / 2, height / 2))
                    .on("tick", ticked)
                ;

            simulation
                .nodes(nodes)
            ;

            simulation.force("link")
                .links(links)
            ;

            var link = myChart.selectAll(".link")
                .data(links)
                .enter().append("line")
                .attr("class", "link")
                .attr("stroke", "#333")

                .style("stroke-width", function(d) {
                    return d.value ;
                })
                .attr("marker-end", "url(#end)");




            var node = myChart.selectAll("g")
                    .data(nodes)
                    .enter().append("g")
                    .call(d3.drag()
                        .on("start", dragstarted)
                        .on("drag", dragged)
                        .on("end", dragended)
                    )

                ;


            node.append("circle")
                .attr("r", 10)
                .attr("fill", function (d, i) {
                    return color(i);
                })
                .style('cursor', 'pointer')




            node.append("text")
                .attr("dx", 12)
                .attr("dy", ".35em")
                .text(function(d) { return d.title })


            node.on('mouseover', function (d) {
                /*                 toolTip.transition()
                 .style('display', 'block');

                 toolTip
                 .html('<h5 class="nodeToolTip">'+d.title+'</h5>'+'<h6 class="nodeToolTipEdges">Node edges : '+d.edgeCount+'</h6>')
                 .style('left', (d3.event.pageX +20) + 'px')
                 .style('top', d3.event.pageY + 10+ 'px');
                 */
                d3.select("#nodeName").html(d.title);

            });

            node.on('click', function (d) {

                ctrl.sendNodeData(d.title, nodes, links);
            });



            /*        .on("mouseout", function() {
             toolTip.transition()
             .style('display', 'none');

             })*/



            function ticked() {
                link
                    .attr("x1", function (d) {
                        return d.source.x;
                    })
                    .attr("y1", function (d) {
                        return d.source.y;
                    })
                    .attr("x2", function (d) {
                        return d.target.x;
                    })
                    .attr("y2", function (d) {
                        return d.target.y;
                    });



                node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
                /*                node
                 .attr("cx", function (d) {
                 return d.x;
                 })
                 .attr("cy", function (d) {
                 return d.y;
                 });*/

            }

            function dragstarted(d) {
                if (!d3.event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            }

            function dragged(d) {
                d.fx = d3.event.x;
                d.fy = d3.event.y;
            }

            function dragended(d) {
                if (!d3.event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;

            }
            function zoomed() {
                myChart.attr("transform", "translate(" + d3.event.transform.x + "," + d3.event.transform.y + ")" + " scale(" + d3.event.transform.k + ")");
            }

        });
    }

})