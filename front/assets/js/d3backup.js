/**
 * Created by soroush on 12/17/16.
 */

var arc = d3.arc()
        .innerRadius(20)
        .outerRadius(55)
        .startAngle(0)
    ;

var pie = d3.pie()
    .value(function (d) {
        return d.count;
    })
    .sort(null);

var nodePie = myChart.selectAll('path')
    .data(pie(dataSet)).enter()
    .append('path')
    .datum({endAngle: 0})
    .attr('d', arc)
    .attr('fill', '#3c3c3c')
    .attr('stroke', 'white')


function arcTween(newAngle) {

    return function(d) {

        var interpolate = d3.interpolate(d.endAngle, newAngle);


        return function (t) {


            d.endAngle = interpolate(t);

            return arc(d);

        }
    }
}


nodePie
    .transition()
    .duration(50)
    .attrTween("d", arcTween(0));


nodePie
    .attr('transform', 'translate(' + d.x + ',' + d.y+ ')')
    .transition()
    .duration(500)
    .attrTween("d", arcTween(tau));