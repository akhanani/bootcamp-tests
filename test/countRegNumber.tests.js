describe('the countRegNumber function', function(){

it('should check the number of regNum', function(){
   assert.equal( countRegNumber('CA 182736, CY 523519, CJ 812328'), 3);
  });
  it('should takes in a string paremeter that look like CA 182736, CY 523519, CJ 812328 ', function(){
     assert.equal( countRegNumber('CA 182736, CY 523519, CJ 812328,CF'), 4);
    });
});
