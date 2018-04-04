describe('totalPhoneBill', function(){
  it ('they must return R4.00', function(){
   assert.equal(totalPhoneBill('sms R2.65'),'R0.00');
  });
  it ('should return R4.00', function(){
  assert.equal(totalPhoneBill('call R0.65 '),'R0.00');
  });
});
