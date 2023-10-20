class WineSelection {
    constructor(space){
        this.space = Number(space);
        this.wines =[];
        this.paid = false;
        this.bill = 0; 
    }

    reserveABottle(wineName, wineType, price){
        if(this.space < this.wines.length){
            throw new Error('Not enough space in the cellar.')
        }
        
        let paid = this.paid;
        this.space --; 
        this.wines.push({wineName, wineType, price, paid});
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle( wineName, price ){
        let selectedWine = this.findBottle(wineName);

        if (!selectedWine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        else if(selectedWine.paid){
            throw new Error(`${wineName} has already been paid.`);
        }

        selectedWine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName){
        let selectedWine = this.findBottle(wineName);
        if (!selectedWine) {
            throw new Error('The wine, you\'re looking for, is not found.');
        }

        else if (!selectedWine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }

        this.removeWine(selectedWine);
        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType){
        if (wineType === undefined) {
          

            return `You have space for ${ this.space } bottles more.` + '\n' +
            `You paid ${this.bill}$ for the wine.` + '\n' +
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName)).map(w => `${w.wineName} > ${w.wineType} - ${w.paid === true ? 'Has Paid.': 'Not Paid.'}`)
                      .join('\n');
        } else{
            let selectedWine = this.wines.find(w => w.wineType === wineType);
            if (!selectedWine) {
                throw new Error(`There is no ${wineType} in the cellar.`)
            }


           return `${selectedWine.wineName} > ${wineType} - ${selectedWine.paid === true ? 'Has Paid.' : 'Not Paid.'}`
        }
    }





    findBottle(wineName){
      return this.wines.find(w => w.wineName === wineName);
    }

    removeWine(selectedWine){
        let index = this.wines.indexOf(selectedWine);
        return this.wines.splice(index, 1);
    }
}

//Input 1
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

//Input 2
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

//Input 3
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

//Input 4
// const selection = new WineSelection(5)
// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.payWineBottle('Bodegas Godelia Mencía', 144);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// console.log(selection.cellarRevision());


// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));


// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose'));
// console.log(selection.cellarRevision('Rose'));

// let selection = new WineSelection(5);
// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.payWineBottle('Bodegas Godelia Mencía', 144);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);






