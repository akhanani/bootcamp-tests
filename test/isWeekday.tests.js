describe('isWeekday',function(){
  it ('should confirm that Saturday  is the day of the weekend ', function(){
   assert.equal(isWeekday('Saturday'), false);
});
 it ('should confirm that Monday is weekday', function(){
assert.equal(isWeekday('Monday'),true);
});
it('should confirm that the week  startsWith Sunday',function(){
  assert.equal(isWeekday('Sunday'),false);
});
   });
