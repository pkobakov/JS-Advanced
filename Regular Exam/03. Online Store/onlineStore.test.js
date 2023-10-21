const onlineStore = require('./onlineStore');
const expect = require('chai').expect;

describe('Online Store Tests', () => {
    describe('isProductAvailable', () => {
        it('validations', () => {
          expect(() => onlineStore.isProductAvailable(1,1)).to.throw('Invalid input.');
          expect(() => onlineStore.isProductAvailable(' ', ' ')).to.throw('Invalid input.');
          
        })

        it('in/out of stock', () => {
            expect(onlineStore.isProductAvailable('masa', -1)).to.equal(`Sorry, masa is currently out of stock.`);
            expect(onlineStore.isProductAvailable('masa', 0)).to.equal(`Sorry, masa is currently out of stock.`)
            expect(onlineStore.isProductAvailable('masa', 2)).to.equal(`Great! masa is available for purchase.`)

        });

    })

    describe('canAffordProduct', () => {
        it('validations', () => {
            expect(() => onlineStore.canAffordProduct('', 1)).to.throw("Invalid input.");
            expect(() => onlineStore.canAffordProduct(1, '')).to.throw("Invalid input.");
        })

        it('remaining balance', ()=> {
            expect(onlineStore.canAffordProduct(50, 100)).to.equal('Product purchased. Your remaining balance is $50.');
            expect(onlineStore.canAffordProduct(150, 100)).to.equal("You don't have sufficient funds to buy this product.");

        })
    })

    describe('getRecommendedProducts', () => {
        it('validations', () =>{
           expect(() => onlineStore.getRecommendedProducts()).to.throw("Invalid input.");
           expect(() => onlineStore.getRecommendedProducts()).to.throw("Invalid input.");

        })

        it('get products', () => {
            expect(onlineStore.getRecommendedProducts([{name: 'masa', category:'mebeli'}, {name: 'stol', category:'mebeli'}], 'hrana')).to.equal('Sorry, we currently have no recommended products in the hrana category.');
            expect(onlineStore.getRecommendedProducts([{name: 'masa', category:'mebeli'}, {name: 'stol', category:'mebeli'}], 'mebeli')).to.equal('Recommended products in the mebeli category: masa, stol')

        })
    })
})