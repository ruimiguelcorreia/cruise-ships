class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.port[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }

  setSail() {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.port.indexOf(this.currentPort);

    if (currentPortIndex === itinerary.port.length - 1) {
      throw new Error("End of itinerary reached.");
    }
    this.previousPort = this.currentPort;
    this.currentPort = null;
    this.previousPort.removeShip(this);
  }

  dock() {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.port.indexOf(this.previousPort);
    this.currentPort = itinerary.port[previousPortIndex + 1];
    this.currentPort.addShip(this);
  }
}

module.exports = Ship;
