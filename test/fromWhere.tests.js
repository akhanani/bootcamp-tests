describe('fromWhere',function(){

    it('should returns regNumbers starts with CY',function(){
        assert.equal(fromWhere('Bellville'),('Some other place!'),true);
    });
    it('should returns regNumbers for CJ',function(){
        assert.equal(fromWhere('Paarl'),('Some other place!'),true);
    });
    it ('should returns regNumbers for CA',function(){
      assert.equal(fromWhere('Cape Town'),('Some other place!'),true);
    });
    it ('should returns otherwise ',function(){
    assert.equal(fromWhere('CR 143, CL 133'),('Some other place!'),true);
    });
});
