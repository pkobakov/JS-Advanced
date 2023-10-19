class OnlineShop{
    constructor(warehouseSpace){
        this.warehouseSpace = Number(warehouseSpace)
        this.products = [];
        this.sales = [];

    }

    loadingStore(product, quantity, spaceRequired){
        if(this.warehouseSpace < spaceRequired){
            throw new Error('Not enough space in the warehouse.');
        }

        this.warehouseSpace -= spaceRequired; 
        let currentProduct= {product, quantity};
        this.products.push(currentProduct);
        return `The ${currentProduct.product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity){
        const selectedProduct = this.selectProduct(product);

        if (!selectedProduct) {
            throw new Error (`There is no ${product} in the warehouse`);
        }

        if (minimalQuantity <= 0 ) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        if (minimalQuantity <= selectedProduct.quantity) {
            return `You have enough from product ${product}.`
        } else{
            let difference = Number(minimalQuantity-selectedProduct.quantity);
            selectedProduct.quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`
        }
    }

    sellProduct(product) {
        const selectedProduct = this.selectProduct(product);

        if (!selectedProduct) {
            throw new Error (`There is no ${product} in the warehouse.`);
        } else{
            selectedProduct.quantity -- ;
            let quantity = 1;
            this.sales.push({product, quantity});
            return `The ${product} has been successfully sold.`;
        }
    }

    selectProduct(product){
        return this.products.find(p => p.product === product);
    }

    revision(){
        if(this.sales.length === 0){
            throw new Error('There are no sales today!');
        } else{
            const salesCount = this.sales.length
            return `You sold ${salesCount} products today!` + '\n' +
            `Products in the warehouse:` + '\n' + 
            this.products.map(p => `${p.product}-${p.quantity} more left`).join('\n');
        }

    }

}

//Input 1
// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));


//Input 2
// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));

//Input 3
// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));

//Input 4
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


 

