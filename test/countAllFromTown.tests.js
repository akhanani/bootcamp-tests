describe('countAllFromTown',function(){
it(' give count', function(){
 assert.equal(countAllFromTown('0'),false);
    });
    it('should not give  count', function(){
       assert.equal( countAllFromTown('CJ 345'),false);
      });
});
