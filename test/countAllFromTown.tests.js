describe('countAllFromTown',function(){
it('should not give  count', function(){
 assert.equal(countAllFromTown('3'),false);
    });
    it('should not give  count', function(){
       assert.equal( countAllFromTown('CJ 345'),false);
      });
});
