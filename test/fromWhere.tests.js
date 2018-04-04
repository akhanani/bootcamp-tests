describe('fromWhere',function(){

    it('should returns regNumbers starts with CY',function(){
        assert.equal(fromWhere('true'),('Some other place!'),'Bellville');
    });
    it('should returns regNumbers for CJ',function(){
        assert.equal(fromWhere('true'),('Some other place!'),'Paarl');
    });
    it ('should returns regNumbers for CA',function(){
      assert.equal(fromWhere('true'),('Some other place!'),'Cape Town');
    });
    it ('should returns otherwise ',function(){
    assert.equal(fromWhere('CR 143, CL 133'),('Some other place!'),true);
    });
});
