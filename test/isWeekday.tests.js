describe('isWeekday',function(){
  it ('return a week', function(){
   assert.equal(isWeekday('Saturday'), false);
});
 it ('return a week', function(){
assert.equal(isWeekday('Monday'), true);
});
   });
