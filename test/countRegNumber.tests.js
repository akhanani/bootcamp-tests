describe('the countRegNumber function', function(){

it('should give reg count', function(){
   assert.equal( countRegNumber('CA 182736, CY 523519, CJ 812328'), 3);
  });
  it('should not give reg count', function(){
     assert.equal( countRegNumber('CA 182736, CY 523519, CJ 812328'), 3);
    });
});
