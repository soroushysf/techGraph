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
});