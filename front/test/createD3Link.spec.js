/**
 * Created by soroush on 3/31/17.
 */

describe('d3Link service', function () {

    var d3Link;

    beforeEach(angular.mock.module("techMiningGraph"));

    beforeEach(inject(function (_d3Link_) {
        d3Link = _d3Link_;
    }));
    
    it("d3Link service should be defined", function () {
        expect(d3Link).toBeDefined();
    });

    it("d3Link createLinkDoubleCLick test", function () {
        var dataInp = [{
            source : {id : 1},
            target : {id : 2},
            value : 3
        }];
        expect(d3Link.createLinkDoubleCLick(dataInp)[0].source).toBe(1);
        expect(d3Link.createLinkDoubleCLick(dataInp)[0].target).toBe(2);
        expect(d3Link.createLinkDoubleCLick(dataInp)[0].value).toBe(3);

    });
});