const {movieTheater} = require('./03. Movie Theater');
const expect = require('chai').expect;

describe('Testing Movie Theater', () => {
    describe('ageRestrictions tests', () => {
        it('should return appropriate message', () => {
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
            expect(movieTheater.ageRestrictions(undefined)).to.equal('There are no age restrictions for this movie');
        })
    })

    describe('moneySpent tests', () => {
        it('Should calculate final bill correctly', () => {
            const tickets = 5;
            const food = ['Popcorn', 'Nachos'];
            const drinks = ['Water', 'Soda'];
            
            expect(movieTheater.moneySpent(tickets, food, drinks)).to.equal(`The total cost for the purchase with applied discount is 71.60`)
            expect (movieTheater.moneySpent(2, ['Nachos'], ['Water'])).to.equal('The total cost for the purchase is 37.50');
        })

        it('Invalid input should throw an error', () => {
            const tickets = 3;
            const food = ['Popcorn'];
            const drinks = ['Water'];

            expect(() => movieTheater.moneySpent('Pesho', food, drinks)).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent('Pesho', 3, drinks)).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent('Pesho', 'Pesho', drinks)).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent('Pesho', food, 3)).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent('Pesho', food, 'Pesho')).to.throw('Invalid input');

        })
    })

    describe('reservation tests', () => {
        it('Should return the row with the largest number', () => {
           const rowsArray = [{rowNumber: 2, freeSeats: 7}];
           const neededSeatsCount = 5;

           expect(movieTheater.reservation(rowsArray, neededSeatsCount)).to.equal(2);
        })

        it('Invalid input shouls throw an error', () => {
            const rowsArray = [{rowNumber: 2, freeSeats: 7}];
            const neededSeatsCount = 5;

            expect(() => movieTheater.reservation(3, neededSeatsCount)).to.throw('Invalid input');
            expect(() => movieTheater.reservation(rowsArray, 'Pesho')).to.throw('Invalid input');
        })
    })
    
});