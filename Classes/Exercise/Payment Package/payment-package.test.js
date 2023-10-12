let {PaymentPackage} = require('./payment-package');
const assert = require('chai').assert;

describe('Create instance Tests', () => {
    let paymentPackage;

    beforeEach(()=>{
        paymentPackage = new PaymentPackage('Petar', 20)
    });

    it('name should be correct', () => {
        assert.equal(paymentPackage._name, 'Petar');
    })
    
    it('value should be correct', () => {
        assert.equal(paymentPackage._value, 20);
    })

    it('VAT should has default value of 20', () =>{
        assert.equal(paymentPackage._VAT, 20);
    });

    it('active prop should has default value of true', () => {
        assert.equal(paymentPackage._active, true);
    });
    
})

describe('Valid Values Tests', () => {
    let paymentPackage;

    beforeEach(() => {
        paymentPackage = new PaymentPackage('Pepe', 22);
    });

    it('instance correct get and set name', () => {
        assert.equal(paymentPackage.name, 'Pepe');

        paymentPackage.name = 'Toto';
        assert.equal(paymentPackage.name, 'Toto');
    })

    it('instance correct get and set value', () => {
       assert.equal(paymentPackage.value, 22);
       paymentPackage.value = 20; 
       assert.equal(paymentPackage.value, 20);
       paymentPackage.value = 0;
       assert.equal(paymentPackage.value, 0);
    });

    it('instance correct get and set vat', () => {
       assert.equal(paymentPackage.VAT, 20);
       paymentPackage.VAT = 30;
       assert.equal(paymentPackage.VAT, 30);
       paymentPackage.VAT = 0;
       assert.equal(paymentPackage.VAT, 0);
    });

    it('instance correct get and set active', () => {
        assert.ok(paymentPackage.active);
        paymentPackage.active = false;
        assert.notOk(paymentPackage.active);

    })
})

describe('Incorrect Values Tests',() => {

    let paymentPackage;
    beforeEach(() => {paymentPackage = new PaymentPackage('Todor', 10)})

    it('incorrect name throws error', ()  => {
        assert.throws(() => new PaymentPackage('', 10));
        assert.throws(() => new PaymentPackage(10, 10));
    })

    it('incorrect value throws error', ()=>{
        assert.throws(() => new PaymentPackage('P', -10));
        assert.throws(() => new PaymentPackage('P', '10'));
    })

    it('incorrect vat throws error', () => {
        assert.throws(() => paymentPackage.VAT = 'Gosho');
        assert.throws(() => paymentPackage.VAT = -10);
    })

    it('incorrect active throws erro', () => {
        assert.throws(() => paymentPackage.active = 'Gosho');
        assert.throws(() => paymentPackage.active = -10);
    });
})

describe('ToString Method Test', () => {
    let paymentPackage;
    beforeEach(() => {
        paymentPackage = new PaymentPackage('Todor', 30);
    });

    it('test with active state', ()=>{
        let res = ['Package: Todor',
                   '- Value (excl. VAT): 30',
                   '- Value (VAT 20%): 36'].join('\n');

        assert.equal(paymentPackage.toString(), res);
    })

    it('test with inactive state', ()=>{ 
        
        paymentPackage.active = false;
        let res = ['Package: Todor (inactive)',
        '- Value (excl. VAT): 30',
        '- Value (VAT 20%): 36'].join('\n');
        assert.equal(paymentPackage.toString(),res);
    })
})