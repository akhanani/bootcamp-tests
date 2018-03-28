describe('transportFee', function(){
  it(' should returns another price based on the shift you are working', function(){
      assert.equal(transportFee('20') ,'free');
  });
  it(' should  returns another price based on the shift you are working', function(){
      assert.equal(transportFee('10') ,'free');
  });
  it(' should returns  nothing on the shift you are working', function(){
      assert.equal(transportFee('zero') ,'free');
  });
});
