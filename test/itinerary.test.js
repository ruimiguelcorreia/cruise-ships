const Itinerary = require("../src/itinerary");
const Port = require("../src/port");

describe("Itinerary", () => {
  let itinerary, bigItinerary, rome, barcelona;
  beforeEach(() => {
    itinerary = new Itinerary();
    bigItinerary = new Itinerary([rome, barcelona]);
    rome = new Port("Rome");
    barcelona = new Port("Barcelona");
  });

  test("it can be instantiated", () => {
    expect(itinerary).toBeInstanceOf(Object);
  });

  test("it has a ports property", () => {
    expect(bigItinerary.port).toEqual([rome, barcelona]);
  });
});
