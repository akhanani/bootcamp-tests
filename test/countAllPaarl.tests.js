describe('countAllPaarl', function(){
  it('should return how many regNum from Paarl ', function(){
   assert.equal(countAllPaarl('CL 124,CY 567,CL 345, CJ 456,CL 341'),1);
      });
      it('should return zero', function(){
         assert.equal( countAllPaarl (' CL 123,CY 567,CL 345,CL 341'),0);
        });
  });
