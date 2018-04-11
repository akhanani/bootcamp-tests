describe('countAllFromTown',function(){
it('should check how many from town', function(){
 assert.equal(countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341,CA 653','CA'),1);
    });
    it('should not check how many from town', function(){
       assert.equal( countAllFromTown('CJ 345,CY 567 CL 124,CL 567,CJ 456', 'CA'),0);
      });
});
