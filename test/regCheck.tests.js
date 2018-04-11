describe(' the regCheck function', function(){

    it('should check that the regNum is incorrect', function(){
        assert.equal(regCheck('GP 986556', 'GP'),false);
    });
    it(' should check that the regNum are correct', function(){
      assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });
  /*  it('return regNumber.endsWith ', function(){
        assert.equal(regCheck('DV 23 LP GP', 'MP');
    });*/
});
