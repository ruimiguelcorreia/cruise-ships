const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("Ship", () => {
  let itinerary, birmingham, porto, ship;
  beforeEach(() => {
    birmingham = new Port("Birmingham");
    porto = new Port("Porto");
    itinerary = new Itinerary([birmingham, porto]);
    ship = new Ship(itinerary);
  });

  test("creates a new object", () => {
    expect(ship).toBeInstanceOf(Object);
  });

  test("it idenfities a starting port", () => {
    expect(ship.currentPort).toBe(birmingham);
  });

  test("it can set sail", () => {
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(birmingham);
    expect(birmingham.ships).not.toContain(ship);
  });

  test("it can dock at a different port", () => {
    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(porto);
    expect(porto.ships).toContain(ship);
  });

  test("it can not go further than the itinerary", () => {
    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of itinerary reached.");
  });
});
