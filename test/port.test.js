const Port = require("../src/port");
const Ship = require("../src/ship");
const Itinerary = require("../src/itinerary");

describe("Port", () => {
  let port, birmingham, liverpool;
  beforeEach(() => {
    port = new Port();
    birmingham = new Port("Birmingham");
    liverpool = new Port("Liverpool");
  });

  test("it can be instantiated", () => {
    expect(port).toBeInstanceOf(Object);
  });

  test("port has a name", () => {
    expect(birmingham.name).toBe("Birmingham");
  });

  test("it adds the ship to the port", () => {
    const ship = {};

    liverpool.addShip(ship);

    expect(liverpool.ships).toContain(ship);
  });

  test("it removes the ship from the port", () => {
    const ship1 = { name: "ship1" };
    const ship2 = { name: "ship2" };
    const ship3 = { name: "ship3" };

    liverpool.addShip(ship1);
    liverpool.addShip(ship2);
    liverpool.addShip(ship3);
    liverpool.removeShip(ship2);

    expect(liverpool.ships).toEqual([{ name: "ship1" }, { name: "ship3" }]);
  });

  test("Ship > gets added to port on instantiation", () => {
    const port = new Port("Liverpool");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(port.ships).toContain(ship);
  });
});
