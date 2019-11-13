const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("Ship", () => {
  let port, itinerary, birmingham, porto, ship, bigItinerary, bigShip;
  beforeEach(() => {
    port = new Port("Liverpool");
    itinerary = new Itinerary([port]);
    birmingham = new Port("Birmingham");
    porto = new Port("Porto");
    ship = new Ship(itinerary);
    bigItinerary = new Itinerary([birmingham, porto]);
    bigShip = new Ship(bigItinerary);
  });

  test("creates a new object", () => {
    expect(ship).toBeInstanceOf(Object);
  });

  test("it idenfities a starting port", () => {
    expect(ship.currentPort).toBe(port);
  });

  test("it can set sail", () => {
    bigShip.setSail();

    expect(bigShip.currentPort).toBeFalsy();
    expect(bigShip.previousPort).toBe(birmingham);
    expect(birmingham.ships).not.toContain(bigShip);
  });

  test("it can dock at a different port", () => {
    bigShip.setSail();
    bigShip.dock();

    expect(bigShip.currentPort).toBe(porto);
    expect(porto.ships).toContain(bigShip);
  });

  test("it can not go further than the itinerary", () => {
    bigShip.setSail();
    bigShip.dock();

    expect(() => bigShip.setSail()).toThrowError("End of itinerary reached.");
  });
});
