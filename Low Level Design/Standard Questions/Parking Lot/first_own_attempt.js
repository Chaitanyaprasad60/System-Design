

/* 
A parking lot has Entry Gates, Exit Gates and spots 
Entry Gate should store where the car is assign a parking space nearest to it
Exist gate should read this and vacate that space, Calculate fare and Process the payment

Use apt inhertance, OO Principles and SOLID design patterns
*/

// This will store the availbilty of a parking spot. 
class ParkingSpace{

    constructor(length=10,breadth=10,numberOfGates=2,optional={}){
        this.allSpots = new Array(length).fill().map(x => new Array(breadth).fill(false));
        this.vacantSpots = length*breadth;
        this.length = length;
        this.breadth = breadth;
        this.numberOfGates = numberOfGates;
    }   

}

// This represents the vehicles entering
class Vehicle{

    constructor(type,enteredTime,spotNumber){
        this.type = type;
        this.enteredTime = enteredTime; // This will be used on exit
        this.spotNumber = spotNumber;
    }

}

class entryGate{
    //Location of an entry Gate
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    newVehicleEntered(type){

    }
    // Logic to calculate nearest vacant spot
    nearestVacantSpot(){
        return [x+1,y+1]
    }

}