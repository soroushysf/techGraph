/**
 * Created by soroush on 3/25/17.
 */

describe('d3Node service', function() {
    var d3Node;
    beforeEach(angular.mock.module('techMiningGraph'));

    beforeEach(inject(function(_d3Node_) {
        d3Node = _d3Node_;
    }));
    it('d3Node service should be defined', function () {
        expect(d3Node).toBeDefined();
    });
    it('d3Node createNode method test', function () {
        var dataInp = [
            {
                'id' :  1,
                'title' : "tech",
                'edgeCount' : 1,
                'cluster' : 12,
                'icon' : ''
            }
        ];
        expect(d3Node.createNode(dataInp)[0].id).toBe(1);
        expect(d3Node.createNode(dataInp)[0].title).toBe("tech");
        expect(d3Node.createNode(dataInp)[0].cluster).toBe(12);

    });
    it('d3Node createTraverseNode method test', function () {
        var dataInp = [
            {
                '@rid' :  "#23:11",
                'tech_title' : "tech",
                'edgeCount' : 1,
                'cluster' : 12,
                'icon' : ''
            }
        ];
        expect(d3Node.createTraverseNode(dataInp)[0].id).toBe("2311");
        expect(d3Node.createTraverseNode(dataInp)[0].title).toBe("tech");
        expect(d3Node.createTraverseNode(dataInp)[0].cluster).toBe(12);

    });

    it('d3Node filterNodes method test', function () {
        var nodeWithEdge = [
                {
                    'id' :  "2311"
                }
            ],
            nodeWithoutEdge = [
                {
                    'id' :  "23"
                }
            ],
            link = [
                {
                    'source' :  "2311",
                    'target' :  "2312"
                }
            ]
        ;
        expect(d3Node.filterNodes(nodeWithEdge, link)[0].id).toBe("2311");
        expect(d3Node.filterNodes(nodeWithoutEdge, link)[0]).toBe(undefined);

    });
});