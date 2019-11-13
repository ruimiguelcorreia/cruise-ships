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
    const ship = jest.fn();

    liverpool.addShip(ship);

    expect(liverpool.ships).toContain(ship);
  });

  test("it removes the ship from the port", () => {
    const ship1 = jest.fn();
    const ship2 = jest.fn();
    const ship3 = jest.fn();

    liverpool.addShip(ship1);
    liverpool.addShip(ship2);
    liverpool.addShip(ship3);
    liverpool.removeShip(ship2);

    expect(liverpool.ships).toEqual([ship1, ship3]);
  });

  test("Ship > gets added to port on instantiation", () => {
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(port.ships).toContain(ship);
  });
});
