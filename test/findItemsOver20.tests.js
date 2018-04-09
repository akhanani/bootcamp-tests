describe('findItemsOver20', function(){

it('must return the  items that are over 20 and threshold',function(){
  assert.deepEqual(findItemsOver20(

[{name : 'apples', qty : 10},
 {name : 'pears', qty : 37},
 {name : 'bananas',qty : 27},
 {name :' apples', qty : 3}]),

 [{name : 'pears', qty : 37},
{name : 'bananas',qty : 27}]);

});

it('should return all the items that are under 20',function(){
  assert.deepEqual(findItemsOver20(

[{name : 'guava', qty : 40},
{name : 'grapes', qty : 70},
{name : 'bananas', qty: 7},
{name : 'apples', qty : 3}]),

 [{name : 'guava', qty : 40},
 {name : 'grapes', qty : 70}]);

   });
});
