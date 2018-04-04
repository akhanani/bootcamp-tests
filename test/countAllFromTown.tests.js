describe('countAllFromTown',function(){
it(' give count', function(){
 assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341'),0);
    });
    it('should not give  count', function(){
       assert.equal( countAllFromTown('CJ 345'),0);
      });
});
