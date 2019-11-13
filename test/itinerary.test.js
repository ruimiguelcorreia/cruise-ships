const Itinerary = require("../src/itinerary");
const Port = require("../src/port");

describe("Itinerary", () => {
  let itinerary, rome, barcelona;
  beforeEach(() => {
    rome = jest.fn();
    barcelona = jest.fn();
    itinerary = new Itinerary([rome, barcelona]);
  });

  test("it can be instantiated", () => {
    expect(itinerary).toBeInstanceOf(Object);
  });

  test("it has a ports property", () => {
    expect(itinerary.port).toEqual([rome, barcelona]);
  });
});
