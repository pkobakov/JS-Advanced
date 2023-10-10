const assert = require('chai').assert;
const {mathEnforcer} = require('./math-enforcer');


describe('addFive', () => {
   describe('incorrect value', () => {
    it('test with string', () => {
        assert.equal(mathEnforcer.addFive('pesho'), undefined);
    });

    it('test with Object', () => {
         assert.equal(mathEnforcer.addFive({name: 'Pesho', age: 33}), undefined); 
    });

    it('test with array', () => {
       assert.equal(mathEnforcer.addFive(['1', '2']), undefined);
    });

    
   })
   describe('correct value', () => {

    it('tests with correct negative value', () => {
        assert.equal(mathEnforcer.addFive(-55), -50);
        assert.equal(mathEnforcer.addFive(-3), 2);
        assert.equal(mathEnforcer.addFive(-5), 0);
      })
    });
    
    it('tests with correct positive value', () => {
        assert.equal(mathEnforcer.addFive(3), 8);
        assert.equal(mathEnforcer.addFive(0), 5);
    });

    it('test with floating point', () => {
        assert.equal(mathEnforcer.addFive(1.5), 6.5);
    });
});

describe('subtractTen', () => {
   describe('tests with incorrect value', () => {
    it(' test with string', () => {
      assert.equal(mathEnforcer.subtractTen('string'), undefined);
    })

    it('test with array', () => {
       assert.equal(mathEnforcer.subtractTen([2,3]), undefined);
    });

    it('test with Object', () => {
        assert.equal(mathEnforcer.subtractTen({name: 'Pi', age: 33}), undefined);
    });
  });

  describe('test with correct value', () => {
    it('correct negative value', () => {
        assert.equal(mathEnforcer.subtractTen(-30), - 40);
        assert.equal(mathEnforcer.subtractTen(0), - 10);
    })

    it('correct positive value', () => {
        assert.equal(mathEnforcer.subtractTen(15), 5);
    });

    it('correct floating point', () => {
        assert.equal(mathEnforcer.subtractTen(15.5), 5.5);
    })
  });
});



describe('sum', () => {
    describe('tests with incorrect value', () => {
        it('tests with string', () => {
            assert.equal(mathEnforcer.sum('niki', 3), undefined);
            assert.equal(mathEnforcer.sum(3, 'niki'), undefined);
            assert.equal(mathEnforcer.sum('niki', 'alex'), undefined);
        });

        it('tests with array', () => {
          assert.equal(mathEnforcer.sum([2, 3], 4), undefined);
          assert.equal(mathEnforcer.sum(3, [4, 6]), undefined);
          assert.equal(mathEnforcer.sum([2, 3], [4, 9]), undefined);
        });

        it('tests with object', () => {
            assert.equal(mathEnforcer.sum({name: 'Pi', age: 33}, 4), undefined );
            assert.equal(mathEnforcer.sum(4, {name: 'Pi', age: 33}), undefined);
            assert.equal(mathEnforcer.sum({name: 'Pi', age: 33}, {name: 'Pi', age: 33}), undefined);
        });
    });

    describe('tets with correct value', () => {
        it('test with negative values', () => {
            assert.equal(mathEnforcer.sum(-5, 7), 2);
            assert.equal(mathEnforcer.sum(5, -7), -2);
            assert.equal(mathEnforcer.sum(0, 4), 4);
        });

        it('tets with positive value', () => {
           assert.equal(mathEnforcer.sum(4,5),9);
           assert.equal(mathEnforcer.sum(4.5, 5.5), 10);
           
        });
    });
});