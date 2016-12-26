/**
 * Created by soroush on 12/11/16.
 */

app.directive('graphView' , function () {

    return {
        link : d3Draw,
        restrict : 'E',
        scope : {
            d3Nodes : '=',
            d3Links : '='
        }
        };


    function d3Draw(scope, element, attr) {



            scope.$watchGroup(['d3Links', 'd3Nodes'], function (newValues) {

                var nodes = newValues[1], links = newValues[0]
                    ;




                var height = $('.graphWindow').height(),
                    width = $('.graphWindow').width();
                var color = d3.scaleOrdinal(d3.schemeCategory20),
                    toolTip = d3.select('body').append('div')
                        .style('position', 'absolute')
                        .style('padding', '5px 10px')
                        .style('background', '#303030')
                        .style('color', 'white')
                        .style('display', 'none')
                        .style('border-radius', '5px')
                    ;


                var myChart = d3.select(element[0]).append('svg')
                        .style("width", width)
                        .style("height", height)
                        .style("background", "white")
                        .attr('class', 'mainSvg')
                    ;



                var simulation = d3.forceSimulation(nodes)
                        .force("link", d3.forceLink().id(function (d) {
                            return d.id
                        }).distance(function (d) {
                            return d.value * 22
                        }))
                        .force("charge", d3.forceManyBody())
                        .force("center", d3.forceCenter(width / 2, height / 2))
                        .on("tick", ticked)
                    ;


                var link = myChart.append("g")
                    .selectAll("line")
                    .data(links)
                    .enter().append("line")
                    .attr("stroke-width", function (d) {
                        return d.value * 0.1;
                    })
                    .attr("stroke", "#333");



                var node = myChart.append("g")
                        .selectAll("circle")
                        .data(nodes)
                        .enter().append("circle")
                        .attr("r", 20)
                        .attr("fill", function (d, i) {
                            return color(i);
                        })
                        .style('cursor', 'pointer');



                       node.on('mouseover', function (d) {
                           toolTip.transition()
                               .style('display', 'block')

                            toolTip
                                .html('<h5 class="nodeToolTip">'+d.title+'</h5>'+'<h6 class="nodeToolTipEdges">Node edges : '+d.edgeCount+'</h6>')
                                .style('left', (d3.event.pageX +20) + 'px')
                                .style('top', d3.event.pageY + 10+ 'px')

                            d3.select("#nodeName").html(d.title);


                        })


                        .on("mouseout", function() {
                            toolTip.transition()
                                .style('display', 'none');

                        })

                        .call(d3.drag()
                            .on("start", dragstarted)
                            .on("drag", dragged)
                            .on("end", dragended))
                    ;





                simulation
                    .nodes(nodes)
                ;

                simulation.force("link")
                    .links(links)
                ;


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

                    node
                        .attr("cx", function (d) {
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            return d.y;
                        });

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

            });
    }

})