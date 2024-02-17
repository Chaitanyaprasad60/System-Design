// Simple Outline without function definitions. 
// As this is the first problem use JS later on try TS
// This will be the main class that will create all other objects
// Using Factory pattern design. 
class ParkingSpace {

    constructor({ length = 10, breadth = 10, numberOfGates = 2,
        entryGatesPosition = [[0, 0]],
        exitGatesPosition = [[0, 0]] } = {}) {
        this.allSpots = new Array(length).fill().map(x => new Array(breadth).fill(false));
        this.vacantSpots = length * breadth;
        this.length = length;
        this.breadth = breadth;
        this.numberOfGates = numberOfGates;
    }

}

class ParkingSpot {
    spotId;
    spotAvaiable = true;
    parkingType = "Generic"; //Default Parking Type
    pricePerHour; // General Price
}

class ParkingTicket {
    ticketId;
    parkingSpotId;
    parkingSpotType;
    issueTime;
}

class Terminal {
    gateNumber;
    securityPersonnelId;
    position = { x, y };
}

class PaymentProcessor {
    paymentStatus = "failed"; // By default will be assigned success on API response
    priceCalculator(parkingSpotType, startTime, endTime) { }; // Returns payment amt for user to verify
    initiatePayment() { }; // returns success or failure
}

class ParkingStrategy {
    vacantParkingSpots;
    filledParkingSpots;
    getParkingTicket(entrace, vehicleType) { };

}

class Lift {
    position = { x, y };
}

//Defining child classes from here. 

class EntryTerminal extends Terminal {
    // Using this information this function will calculate the best parking Spot for a vehicle
    // And Return Ticket Object, additionally this will fill parking spot. 
    issueEntryTicket(parkingSpotType, vehicleNumber, parkingStategy) { }
}

class ExitTermial extends Terminal {

    // Using details in ticket and payment type given it will process the payment. 
    // Additionally this will clear the parking spot. 
    acceptTicket(ticket, paymentProcessor) { };
}

class CarParkingSpot extends ParkingSpot {
    parkingType = "car";
    pricePerHour = 100;

}

class BikeParkingSpot extends ParkingSpot {
    parkingType = "bike";
    pricePerHour = 50;

}

class TruckParkingSpot extends ParkingSpot {
    parkingType = "truck";
    pricePerHour = 200;

}

class CreditCardPaymentProcessor extends PaymentProcessor {
    // Redefine initiatePayment as apt
}

class UPIPaymentProcessor extends PaymentProcessor {
    // Redefine initiatePayment as apt
}

// We can take two approaches eighther store all spots in a HashMap in an order and remove it.
// OR
// Calculate the spot everytime. 
class NearestToEntrance extends ParkingStrategy {
    // Here we are taking parking Space as variable to know the number of parking spots, gates and other information. 
    fillParkingSpots(parkingSpace, entryGates) { };
}

class NearestToExit extends ParkingStrategy {
    fillParkingSpots(parkingSpace, exitGates) { };
}

// Makes most sense to me. Who wants to walk all the way in parking?
class NearestToLift extends ParkingStrategy {
    fillParkingSpots(parkingSpace, lifts) { };
}





/* SOME CONSICOUS DESIGN CHOICE MADE AND WHY ??

1. How will it help to creat child classes of a Entry/Exit terminal ? 
Ans: It should be noted that terminals have a lot of things in common which are nt defined but are really useful. 
Example Properties like - 
  - GPS Coordinate of terminal
  - Fast Tag scanner Ids
  - Assigning Secuirty Personal
  - Closed/Open Status
  - Floor Number 
  - Camera Id and many more. 
So, In future if someone wants to add these properties they don't need to add them to two classes. 

2. Why did we define child classes for differnt types of parking spot instead of using a list ? 
Ans: This is a standard example of 'is a' relationship. So inheritance works better. 
Also, note that if you want to add additional parking spot type using a list/enum approach would require changes in existing class. 
Assume, the cost of different parking spot is different, which it mostly is, the each parking type has a propety - price. Then it being a object helps. 


3. Why is there no Vehicle class which is quite common in this question ? 
Ans: Philosphically, here we are creating a Parking Lot structure, vehicles will come and go but not stay inside forver.
Moreover all details of vehicle are hanlded here by ParkingSpot and Ticket Classes. 


*/
