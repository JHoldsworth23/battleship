const Gameboard = require('./gameboard');
const Battleship = require('./battleship');

class Player {
    constructor(name='Unknown', type='human') {
        this.name = name;
        this.type = type;
        this.gameboard = new Gameboard();
        this.ships = {
            carrier: {
                ship: new Battleship(5, 'carrier'),
                placed: false,
            },
            battleship: {
                ship: new Battleship(4, 'battleship'),
                placed: false,
            },
            cruiser: {
                ship: new Battleship(3, 'cruiser'),
                placed: false,
            },
            submarine: {
                ship: new Battleship(3, 'submarine'),
                placed: false,
            },
            destroyer: {
                ship: new Battleship(2, 'destroyer'),
                placed: false,
            },
        }
    }

    placeShip(shipName, x, y, axis) {
        if (!this.ships[shipName]) throw new Error('Invalid ship name');

        try {
            this.gameboard.placeShip(this.ships[shipName].ship, x, y, axis);
            this.ships[shipName].placed = true;
            return true;
        } catch (err) {
            return false;
        }
    }
}

module.exports = Player;