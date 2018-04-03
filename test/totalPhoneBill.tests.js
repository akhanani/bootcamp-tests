describe('totalPhoneBill', function(){
  it ('they must return R3.40', function(){
   assert.equal(totalPhoneBill('call,sms'),'R0.00');
  });
  it ('should return R0.65', function(){
  assert.equal(totalPhoneBill('call,sms'),'R0.00');
  });
});
