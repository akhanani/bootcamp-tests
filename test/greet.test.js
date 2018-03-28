describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal(greet('Andrew'),'Hello, Andrew' );
    });
    it('should greet soso correctly', function(){
        assert.equal(greet('soso'),'Hello, soso' );
    });
      });
