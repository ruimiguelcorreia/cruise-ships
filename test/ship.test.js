const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("Ship", () => {
  test("creates a new object", () => {
    const port = new Port("Liverpool");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });

  test("it idenfities a starting port", () => {
    const port = new Port("Liverpool");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(port);
  });

  test("it can set sail", () => {
    const liverpool = new Port("Liverpool");
    const porto = new Port("Porto");
    const itinerary = new Itinerary([liverpool, porto]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(liverpool);
    expect(liverpool.ships).not.toContain(ship);
  });

  test("it can dock at a different port", () => {
    const liverpool = new Port("Liverpool");
    const porto = new Port("Porto");
    const itinerary = new Itinerary([liverpool, porto]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(porto);
    expect(porto.ships).toContain(ship);
  });

  test("it can not go further than the itinerary", () => {
    const liverpool = new Port("Liverpool");
    const porto = new Port("Porto");
    const itinerary = new Itinerary([liverpool, porto]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of itinerary reached.");
  });
});
