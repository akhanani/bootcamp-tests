describe('transportFee', function(){
  it(' should returns the price that you must pay in the morning shift', function(){
      assert.equal(transportFee('morning') ,'R20');
  });
  it(' should  returns the normal price that you must pay in the afternoon shift', function(){
      assert.equal(transportFee('afternoon') ,'R10');
  });
  it(' returns  free if you are working on nightshift', function(){
      assert.equal(transportFee('nightshift') ,'free');
  });
  it ('returns nothing if you are not working anymore',function(){
    assert.equal(transportFee('undefined'),'free');
  });
});
