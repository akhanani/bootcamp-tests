describe('countAllPaarl', function(){
  it('should not give  count', function(){
   assert.equal(countAllPaarl('CJ'),true);
      });
      it('should  give count', function(){
         assert.equal( countAllPaarl ('23'),false);
        });
  });
