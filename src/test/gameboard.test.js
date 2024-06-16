const Gameboard = require('../modules/gameboard');

describe('Gameboard class', () => {

    let gameboard;
    let fakeBattleship;
    let fakeDestroyer;

    beforeEach(() => {
        gameboard = new Gameboard();
        fakeBattleship = { length: 3, hit: jest.fn(), sunk: false };
        fakeDestroyer = { length: 2, hit: jest.fn(), sunk: false };
    });

    test('gameboard is type of a class / object', () => {
        expect(typeof gameboard).toBe('object');
    });

    test('placeShip method places a ship horizontally', () => {
        gameboard.placeShip(fakeBattleship, 0, 0, 'xAxis');
        expect(gameboard.board[0][0]).toEqual(fakeBattleship);
        expect(gameboard.board[0][1]).toEqual(fakeBattleship);
        expect(gameboard.board[0][2]).toEqual(fakeBattleship);
    });

    test('placeShip method places a ship vertically', () => {
        gameboard.placeShip(fakeBattleship, 0, 0, 'yAxis');
        expect(gameboard.board[0][0]).toEqual(fakeBattleship);
        expect(gameboard.board[1][0]).toEqual(fakeBattleship);
        expect(gameboard.board[2][0]).toEqual(fakeBattleship);
    });

});