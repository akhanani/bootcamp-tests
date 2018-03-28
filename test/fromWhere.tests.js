describe('fromWhere', function(){

    it('return reg numbers from Bellville only', function(){
        assert.equal(isFromBellville('CY'),true);
    });
    it('return reg numbers from Paarl', function(){
        assert.equal(isFromBellville('CJ'),false);
    });
});
