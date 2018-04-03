describe('countAllPaarl', function(){
  it(' not give  count at all', function(){
   assert.equal(countAllPaarl('CJ'),true);
      });
      it('should  give count', function(){
         assert.equal( countAllPaarl ('23'),false);
        });
  });
