describe('isFromBellville', function(){

    it('return reg numbers is from Bellville', function(){
        assert.equal(isFromBellville('CY 346,CY 456,CY 678'),true);
    });
    it('return reg numbers is from Bellville', function(){
        assert.equal(isFromBellville('CR 346, CR 456,CR 678'),false);
    });
});
