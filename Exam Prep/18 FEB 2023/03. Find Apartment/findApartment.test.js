const {findNewApartment} = require('./findApartment');
const expect = require('chai').expect;


describe('Find Apartment Tests', () => {
    describe('isGoodLocation', ()=> {
        it('validations', () => {
            expect(() => findNewApartment.isGoodLocation(1, true)).to.throw('Invalid input!')
            expect(() => findNewApartment.isGoodLocation('Hi', 1)).to.throw('Invalid input!')

        })

        it('suitable city', () => {
            expect(findNewApartment.isGoodLocation('Ruse', true)).to.equal('This location is not suitable for you.')
            expect(findNewApartment.isGoodLocation('Pernik', true)).to.equal('This location is not suitable for you.')
            expect(findNewApartment.isGoodLocation('Vratza', true)).to.equal('This location is not suitable for you.')

            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!')
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.')

        })
    })

    describe('isLargeEnough', () => {
        it('validations', () => {
           expect(() => findNewApartment.isLargeEnough('Hi', 2)).to.throw('Invalid input!')
           expect(() => findNewApartment.isLargeEnough(['Hi'], true)).to.throw('Invalid input!')
           expect(() => findNewApartment.isLargeEnough([], 2)).to.throw('Invalid input!')

        })

        it('test result', () => {
            expect(findNewApartment.isLargeEnough([20, 40, 50], 20)).to.equal('20, 40, 50')
        })
    })

    describe('isItAffordable', () => {

        it('validations', () => {
            expect(() => findNewApartment.isItAffordable('Hi!', 2)).to.throw('Invalid input!')
            expect(() => findNewApartment.isItAffordable(2, 'Hi!')).to.throw('Invalid input!')
            expect(() => findNewApartment.isItAffordable(0, 20)).to.throw('Invalid input!')
            expect(() => findNewApartment.isItAffordable(20, 0)).to.throw('Invalid input!')   
            expect(() => findNewApartment.isItAffordable(-1, 20)).to.throw('Invalid input!')
            expect(() => findNewApartment.isItAffordable(20, -1)).to.throw('Invalid input!')
        })
        
        it('test result', () => {
           expect(findNewApartment.isItAffordable(20, 40)).to.equal('You can afford this home!')
           expect(findNewApartment.isItAffordable(50, 40)).to.equal('You don\'t have enough money for this house!')            
        })
    })
})