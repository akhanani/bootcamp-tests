describe('fromWhere',function(){

    it('should returns regNumbers for CY',function(){
        assert.equal(fromWhere('CY 346'),'Bellville');
    });
    it('should returns regNumbers for CJ',function(){
        assert.equal(fromWhere('CJ 122563'),'Paarl');
    });
    it ('should returns regNumbers for CA',function(){
      assert.equal(fromWhere('CK 263739'),'Some other place!');
    });
    it ('should returns otherwise ',function(){
    assert.equal(fromWhere('CR 143'),'Some other place!');
    });
});
