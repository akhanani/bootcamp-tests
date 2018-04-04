describe('isFromBellville', function(){

    it('return reg numbers is from Bellville', function(){
        assert.equal(isFromBellville('CY 346'),true);
    });
    it('return reg numbers on other place', function(){
        assert.equal(isFromBellville('CR 346'),false);

    });
    it('should check Bellville only', function(){
        assert.equal(isFromBellville('CY 346'),true);
    });
});
