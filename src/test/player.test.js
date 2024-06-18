const Player = require('../modules/player');

describe('Player class', () => {

    let player;

    beforeEach(() => {
        player = new Player();
    });

    test('player is a type of function', () => {
        expect(typeof Player).toBe('function');
    });

    test('player has a gameboard property', () => {
        expect(player.gameboard).toBeDefined();
    });

    test('player has a ships property', () => {
        expect(player.ships).toBeDefined()
    });

    test('player placeShip method calls gameboard placeShip method with correct arguments', () => {
        const placeShipMock = jest.fn();
        player.gameboard = { placeShip: placeShipMock };

        expect(player.placeShip('carrier', 0, 0, 'xAxis')).toEqual(true);
        expect(placeShipMock).toHaveBeenCalledTimes(1);
        expect(placeShipMock).toHaveBeenCalledWith(player.ships.carrier.ship, 0, 0, 'xAxis');
    });

    test('player placeShip method called with invalid ship name', () => {
        expect(() => {
            player.placeShip('invalid', 0, 0, 'xAxis');
        }).toThrow('Invalid ship name');
    });

});