class RefurbishedSmartphones{
    constructor(retailer){
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmarphones = [];
        this.revenue = 0;

    }

    addSmartphone (model, storage, price, condition){
        if (!model || storage < 0 || typeof(storage) !== 'number' || price < 0 || !condition) {
            throw new Error("Invalid smartphone!");
        }

        let smartPhone = {model: model, storage: storage, price: Number(price), condition};
        this.availableSmartphones.push(smartPhone);
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage){
        const selectedSmartphone = this.availableSmartphones.find(p => p.model === model);

        if (!selectedSmartphone) {
            throw new Error(`${model} was not found!`);
        }

        let difference = Math.abs(selectedSmartphone.storage - desiredStorage);

        if (difference > 0 ) {
            
            if (difference <= 128) {
                selectedSmartphone.price -= selectedSmartphone.price*0.10;
    
            } else if(difference > 128){
                selectedSmartphone.price -= selectedSmartphone.price*0.20;
            }
        }

        
        const index = this.availableSmartphones.indexOf(selectedSmartphone);
        model = selectedSmartphone.model;
        let storage = selectedSmartphone.storage;
        let soldPrice = Number(selectedSmartphone.price);
        this.revenue += soldPrice;
        this.soldSmarphones.push({model: model, storage: storage, soldPrice: soldPrice});
        this.availableSmartphones.splice(index,1);

        
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;

    }

    upgradePhones () {
        if (this.availableSmartphones.length === 0) {
            throw new Error('There are no available smartphones!');
        }

        return 'Upgraded Smartphones:\n' +
               this.availableSmartphones.map(p => {
                p.storage *= 2;
                return `${p.model} / ${p.storage} / ${p.condition} condition / ${Number(p.price).toFixed(2)}$`
               }).join('\n')
        
    }

    salesJournal (criteria){
        if (criteria !== 'storage' &&  criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }
        if (criteria === 'storage') {
            
            this.soldSmarphones.sort((a,b) => b.storage - a.storage);
        } else if(criteria === 'model'){
            this.soldSmarphones.sort((a, b) => a.model.localeCompare(b.model))
        }

        return `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n` +
        `${this.soldSmarphones.length} smartphones sold:\n` +
        this.soldSmarphones.map(p => {
            return `${p.model} / ${p.storage} GB / ${p.soldPrice.toFixed(2)}$`
        }).join('\n');

    } 

}

//Input 1
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));

//Input 2
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

//Input 3
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());

//Input 4
let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));

