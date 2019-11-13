const Port = require("../src/port");
const Ship = require("../src/ship");
const Itinerary = require("../src/itinerary");

describe("Port", () => {
  test("it can be instantiated", () => {
    const port = new Port();
    expect(port).toBeInstanceOf(Object);
  });

  test("port has a name", () => {
    const port = new Port("birmingham");
    expect(port.name).toBe("birmingham");
  });

  test("it adds the ship to the port", () => {
    const port = new Port("Liverpool");
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });

  test("it removes the ship from the port", () => {
    const port = new Port("Liverpool");
    const ship1 = { name: "ship1" };
    const ship2 = { name: "ship2" };
    const ship3 = { name: "ship3" };

    port.addShip(ship1);
    port.addShip(ship2);
    port.addShip(ship3);
    port.removeShip(ship2);

    expect(port.ships).toEqual([{ name: "ship1" }, { name: "ship3" }]);
  });

  test("Ship > gets added to port on instantiation", () => {
    const port = new Port("Liverpool");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(port.ships).toContain(ship);
  });
});
