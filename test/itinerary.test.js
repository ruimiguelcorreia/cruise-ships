const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('Itinerary', () => {

    test('it can be instantiated', () => {
        const itinerary = new Itinerary;
        expect(itinerary).toBeInstanceOf(Object);
    })

    test('it has a ports property', () => {
        const rome = new Port('Rome');
        const barcelona = new Port('Barcelona');
        
        const itinerary = new Itinerary([rome, barcelona]);
        expect(itinerary.port).toEqual([rome, barcelona]);
    })
})