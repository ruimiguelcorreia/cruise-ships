class Port {
  constructor(name) {
    this.name = name;
    this.ships = [];
  }

  addShip(ship) {
    this.ships.push(ship);
  }

  removeShip(ship) {
    let shipToRemove = this.ships.indexOf(ship);
    this.ships.splice(shipToRemove, 1);
  }
}

module.exports = Port;

//When ship docks, addShip needs to run.
//When ship sets sail, removeShip needs to run.
