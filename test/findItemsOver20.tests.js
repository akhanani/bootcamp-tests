describe('findItemsOver20', function(){
/*
  var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},

];
*/
it('must return the products that have  quantity higher than 20',function(){
  var itemList = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}
];
  assert.deepEqual(findItemsOver20(name),[],[{'name' : 'pears', 'qty' : 27},{'name' : 'bananas', 'qty' : 37}]);
});

it ('should return  the products that have quantity higher than 20',function(){
  assert.deepEqual(findItemsOver20(name),[],[{'name' : 'bananas', 'qty' : 27},{'name' : 'pears', 'qty' : 37}]);
    });

});
