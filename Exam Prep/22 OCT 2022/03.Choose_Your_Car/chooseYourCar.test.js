const {chooseYourCar} = require('./chooseYourCar');
const except = require('chai').expect;

describe('Choose Your Car Tests', ()=>{
    describe('testing choosingType', () => {
       it('If the year is less than 1900 and the year is more than 2022', ()=> {
          except(() => chooseYourCar.choosingType('Sedan', 'red', 1899)).to.throw("Invalid Year!");
          except(() => chooseYourCar.choosingType('Sedan', 'red', 2023)).to.throw("Invalid Year!");
       })

       it('If the value of the string type is different from "Sedan"', () => {
        except(() => chooseYourCar.choosingType('Combi', 'red', 2011)).to.throw("This type of car is not what you are looking for.");
       })

       it('If the year of the car is greater or equal to 2010', ()=> {
        except(chooseYourCar.choosingType('Sedan', 'red', 2021)).to.equal("This red Sedan meets the requirements, that you have.");
       })

       it('If the above conditions are not met', ()=>{
        except(chooseYourCar.choosingType('Sedan', 'red', 2007)).to.equal("This Sedan is too old for you, especially with that red color.")
       })
    })

    describe('testing brand name', () => {
      it('array and index may not always be valid', () => {
        except(() => chooseYourCar.brandName(['BMW'], -1)).to.throw('Invalid Information!')
        except(() => chooseYourCar.brandName(['BMW'], 2)).to.throw('Invalid Information!')
        except(() => chooseYourCar.brandName('BMW', 0)).to.throw('Invalid Information!')
        except(() => chooseYourCar.brandName(['BMW'], 'hello')).to.throw('Invalid Information!')

      })

      it('return the changed array of brands', () => {
        except(chooseYourCar.brandName(['BMW', 'Zero', 'Nitro'], 1)).to.equal('BMW, Nitro')
      })
    })
})
