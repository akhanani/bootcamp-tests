describe('isWeekday',function(){
  it (' should return a week that was', function(){
   assert.equal(isWeekday('Saturday'), false);
});
 it ('return not that  week', function(){
assert.equal(isWeekday('Monday'), true);
});
   });
