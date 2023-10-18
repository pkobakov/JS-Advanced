const {chooseYourCar} = require('./chooseYourCar');
const expect = require('chai').expect;

describe('Choose Your Car Tests', ()=>{
    describe('testing choosingType', () => {
       it('If the year is less than 1900 and the year is more than 2022', ()=> {
          expect(() => {chooseYourCar.choosingType('Sedan', 'red', 1899)}).to.throw("Invalid Year!");
          expect(() => {chooseYourCar.choosingType('Sedan', 'red', 2023)}).to.throw("Invalid Year!");
       })

       it('If the value of the string type is different from "Sedan"', () => {
        expect(() => {chooseYourCar.choosingType('Combi', 'red', 2011)}).to.throw("This type of car is not what you are looking for.");
       })

       it('If the year of the car is greater or equal to 2010', ()=> {
        expect(chooseYourCar.choosingType('Sedan', 'red', 2021)).to.equal("This red Sedan meets the requirements, that you have.");
        expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal("This red Sedan meets the requirements, that you have.");
       })

       it('If the above conditions are not met', ()=>{
        expect(chooseYourCar.choosingType('Sedan', 'red', 2007)).to.equal("This Sedan is too old for you, especially with that red color.")
       })
    })

    describe('testing brand name', () => {
      it('array and index may not always be valid', () => {
        expect(() => {chooseYourCar.brandName(['BMW'], -1)}).to.throw('Invalid Information!')
        expect(() => {chooseYourCar.brandName(['BMW'], 2)}).to.throw('Invalid Information!')
        expect(() => {chooseYourCar.brandName(['BMW'], 3.1)}).to.throw('Invalid Information!')
        expect(() => {chooseYourCar.brandName(['BMW'], 'hello')}).to.throw('Invalid Information!')
        expect(() => {chooseYourCar.brandName('BMW', 1)}).to.throw('Invalid Information!')

      })

      it('return the changed array of brands', () => {
        expect(chooseYourCar.brandName(['BMW', 'Zero', 'Nitro'], 1)).to.equal('BMW, Nitro')
      })
    })

    describe('testing car fuel consumption', () => {
        it('we need to validate the input', () => {
            expect(() => {chooseYourCar.carFuelConsumption('number', 12 )}).to.throw('Invalid Information!')
            expect(() => {chooseYourCar.carFuelConsumption(12, 'number' )}).to.throw('Invalid Information!')
            expect(() => {chooseYourCar.carFuelConsumption(-1, 12 )}).to.throw('Invalid Information!')
            expect(() => {chooseYourCar.carFuelConsumption(12, -1 )}).to.throw('Invalid Information!')
            expect(() => {chooseYourCar.carFuelConsumption(0, 12 )}).to.throw('Invalid Information!')
            expect(() => {chooseYourCar.carFuelConsumption(12, 0 )}).to.throw('Invalid Information!')
        })

        it('Test driving the car to find out what its consumption is', ()=> {
        //let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);

            expect(chooseYourCar.carFuelConsumption(7, 3)).to.equal('The car burns too much fuel - 42.86 liters!')
            expect(chooseYourCar.carFuelConsumption(300, 7)).to.equal('The car is efficient enough, it burns 2.33 liters/100 km.')
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.')

        })
    })
})
