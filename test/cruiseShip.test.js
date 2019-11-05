const cruiseShip = require('../src/cruiseShip');


describe('cruiseShip', () => {

    let ship;
    beforeEach(() => {
        ship = new cruiseShip();
        ship.startingPort = 'liverpool'
        ship.captain = 'Rui'

    })

    test('return an object', () => {

        expect(ship).toBeInstanceOf(Object)
    })

    test('returns a property value for startingPort', () => {
        //const ship = new cruiseShip('liverpool', 'Rui')
        expect(ship.startingPort).toBe('liverpool')
    })

    test('return the value for captain property', () => {
        //const ship = new cruiseShip('liverpool', 'Rui')
        expect(ship.captain).toBe('Rui')
    })

})