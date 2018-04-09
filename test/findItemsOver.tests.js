describe('findItemsOver',function(){

it('return the products that have  quantity higher than 25 and the threshold',function(){
  assert.deepEqual(findItemsOver(

  [{name : 'apples',qty : 10},
  {name : 'pears',qty : 37},
  { name : 'apples',qty : 27},
  {name : 'grapes',qty : 3}], 25),


  [{name : 'pears',qty : 37},
  {name : 'apples',qty : 27}]);

});


it ('should return  the products that have quantity that are over than 10',function(){
  assert.deepEqual(findItemsOver(

    [{name : 'toffie', qty : 10},
    {name : 'pears',qty : 37},
    {name : 'apples', qty : 27},
    {name : 'bananas',qty : 3}], 9),

  [{name : 'toffie', qty : 10},
  {name : 'pears',qty : 37},
  {name : 'apples', qty : 27}]);


   });

});
