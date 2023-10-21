class FlightBookingSystem{
    constructor(agencyName){
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
         

    }

    addFlight (flightNumber, destination, departureTime, price){
        let flight = this.flights.find(f => f.flightNumber === flightNumber);

        if (flight) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        this.flights.push({flightNumber, destination, departureTime, price});
        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight (passengerName, flightNumber){
       
        let flight = this.flights.find(x => x.flightNumber === flightNumber);

        if (flight) {

            this.bookingsCount ++;
            this.bookings.push({passengerName, flightNumber});
            
        } else{
            return `Flight ${flightNumber} is not available for booking.`
        }

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
    }

    cancelBooking (passengerName, flightNumber){
        let booking = this.bookings.find(x => x.flightNumber === flightNumber && x.passengerName === passengerName);

        if (booking) {
            let index = this.bookings.indexOf(booking);
            this.bookings.splice(index, 1);
            this.bookingsCount--;
        } else {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
    }

    showBookings (criteria){
        //"all", "cheap", "expensive"

        if (this.bookings.length === 0) {
            throw new Error('No bookings have been made yet.');
        }

        if (criteria === 'all') {
            return `All bookings(${this.bookingsCount}):\n` + 
            this.bookings.map(x => {
                return `${x.passengerName} booked for flight ${x.flightNumber}.`
            }).join('\n');
        }

        if (criteria === 'cheap'){
            let cheapFlighs = [];
            for (const booking of this.bookings) {
                let flightNumber = booking.flightNumber;
                let flight = this.flights.find(f => f.flightNumber === flightNumber);
                let price = Number(flight.price);

                if (price < 100) {
                    cheapFlighs.push(booking);
                }

            }
            
            if(cheapFlighs.length === 0){
                
                return 'No cheap bookings found.'
            }

            return 'Cheap bookings:\n' +
            cheapFlighs.map(x => {
                return `${x.passengerName} booked for flight ${x.flightNumber}.`
            }).join('\n');
        }
        
        if (criteria === 'expensive') {
            let expensiveFlighs = [];
            for (const booking of this.bookings) {
                let flightNumber = booking.flightNumber;
                let flight = this.flights.find(f => f.flightNumber === flightNumber);
                let price = Number(flight.price);

                if (price > 100) {
                    expensiveFlighs.push(booking);
                }

            }
            
            if(expensiveFlighs.length === 0){
                
                return 'No expensive bookings found.'
            }

            return 'Expensive bookings:\n' +
            expensiveFlighs.map(x => {
                return `${x.passengerName} booked for flight ${x.flightNumber}.`
            }).join('\n');
        }
    }
}

//1
// const system = new FlightBookingSystem("TravelWorld");
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
//   console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
//   console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

//2 
// const system = new FlightBookingSystem("TravelWorld");
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
//   console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
//   console.log(system.bookFlight("Alice", "AA101"));
//   console.log(system.bookFlight("Bob", "BB202"));
//   console.log(system.bookFlight("Charlie", "CC303"));

//3
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));

//4
const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));




