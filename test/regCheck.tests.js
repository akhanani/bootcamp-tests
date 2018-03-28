describe(' the regCheck function', function(){

    it('should return incorrect reg number', function(){
        assert.equal(regCheck('GP 986556', 'GP'),false);
    });
    it('should return correct reg number', function(){
      assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });
  /*  it('return regNumber.endsWith ', function(){
        assert.equal(regCheck('DV 23 LP GP', 'MP');
    });*/
});
