const Battleship = require('../modules/battleship');

describe('battleship class', () => {

    let carrierTest;
    let submarineTest;

    beforeEach(() => {
        carrierTest = new Battleship(5, 'carrier');
        submarineTest = new Battleship(3);
    });

    test('creating a carrier', () => {
        expect(carrierTest).toEqual({ length: 5, name: 'carrier', hitCount: 0, sunk: false, axis: 'xAxis' });
    });

    test('battleship length property is set', () => {
        expect(submarineTest.length).toBe(3);
    });

    test('battleship hit method increment hitCount', () => {
        submarineTest.hit();
        expect(submarineTest.hitCount).toBe(1);
    });

    test('battleship isSunk method returns true if hitCount is equal to length', () => {
        submarineTest.hit();
        submarineTest.hit();
        submarineTest.hit();
        expect(submarineTest.isSunk()).toBeTruthy();
    });

    test('battleship hitCount is not equal to length', () => {
        carrierTest.hit();
        carrierTest.hit();
        expect(carrierTest.isSunk()).not.toBeTruthy();
    });

});