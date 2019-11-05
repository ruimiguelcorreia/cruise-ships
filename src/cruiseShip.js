class cruiseShip {

    constructor(startingPort, captain) {
        this.startingPort = startingPort;
        this.captain = captain;
        let passengers = [];
    }

    setSail(location) {
        let currentLocation = location;
        if (currentLocation != this.startingPort) {
            return false;
        } else {
            return true;
        }
    }
    /*
    addPassenger(name, startingPort, destination) {
        this.passengers.push({
            name: name,
            startingPort: startingPort, 
            destination: destination
        })
    }
*/
    }
    //getPassenger








module.exports = cruiseShip;