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

});