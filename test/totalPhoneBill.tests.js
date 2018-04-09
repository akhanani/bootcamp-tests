describe('totalPhoneBill',function(){
  it ('should check that total of sms,call is equal to R3.40',function(){
     assert.equal(totalPhoneBill('sms,call'),'R3.40');
  });

  it ('should check that sms cost R0.65', function(){
    assert.equal(totalPhoneBill('sms'),'R0.65');
  });

  it ('should check that call cost R2.75',function(){
    assert.equal(totalPhoneBill('call'),'R2.75');
  });
});
