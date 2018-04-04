describe('countAllPaarl', function(){
  it(' not give  count at all', function(){
   assert.equal(countAllPaarl(' CL 123,CA 133'),0);
      });
      it('should  give count', function(){
         assert.equal( countAllPaarl (' CL 123'),0);
        });
  });
