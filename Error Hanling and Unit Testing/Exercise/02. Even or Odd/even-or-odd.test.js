const expect = require('chai').expect;
const {isOddOrEven} = require('./even-or-odd'); 

describe('isOddOrEven', () => {
    it('should return \'even\' ', () => {
        expect(isOddOrEven('even')).to.be.equal('even');
    });

    it('should return \'odd\' ', () => {
        expect(isOddOrEven('odd')).to.be.equal('odd');
    });

    it('should return undefined ', () => {
        expect(isOddOrEven(1)).to.be.equal(undefined);
        expect(isOddOrEven([1,2])).to.be.equal(undefined);
        expect(isOddOrEven({})).to.be.equal(undefined);
    });

});