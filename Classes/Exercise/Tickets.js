function solve(arr, criteria){

    class Ticket {
        constructor(destination, price,status){
            this.destination = destination;
            this.price = Number(price); 
            this.status = status; 
        }
    }

    let res = [];

    for (const el of arr) {
        const currentTicketData = el.split('|');
        let ticket = new Ticket(currentTicketData[0], currentTicketData[1], currentTicketData[2]);

        res.push(ticket);
        
    }

    let sorted = criteria === 'price'? res.sort((a,b) => a[criteria] - b[criteria]) 
                                     : res.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    
    return sorted;
}

console.table(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));

console.log('...............');

console.table(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
));


