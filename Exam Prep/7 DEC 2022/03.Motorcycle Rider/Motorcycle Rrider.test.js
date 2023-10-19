const {motorcycleRider} = require('./Motorcycle Rider');
const expect = require('chai').expect;

describe('Motor Cycle Rider Tests', () => {
    describe('licenseRestriction', () => {
        it('Category dependences', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        })

        it('Invalid Information Error', () => {
            expect(()=> motorcycleRider.licenseRestriction('M')).to.throw('Invalid Information!');
        })


    })

    describe('motorcycleShowroom', () => {
        //motorcycleShowroom(array, number)
        it('Input validations', ()=> {
            expect(() => motorcycleRider.motorcycleShowroom(1, 60)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(['A', 'B'], 'hi')).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom([], 55)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.motorcycleShowroom(['A', 'B'], 49)).to.throw('Invalid Information!');
        })

        it('available motorcycles matching your criteria', ()=>{
            expect(motorcycleRider.motorcycleShowroom(['55', '50', '60'], 60)).to.equal('There are 3 available motorcycles matching your criteria!')
        })
    })

    describe('otherSpendings', ()=> {
        it('Input Validations', ()=> {
            expect(() => motorcycleRider.otherSpendings([], 2, true)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings(2, [], false)).to.throw('Invalid Information!');
            expect(() => motorcycleRider.otherSpendings([],[],2)).to.throw('Invalid Information!');
        })

        it('Result tests', () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!');
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.equal('You spend $600.00 for equipment and consumables!');

        })

    })
})