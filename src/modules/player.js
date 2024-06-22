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
            this.ships[shipName].ship.setAxis(axis);
            this.gameboard.placeShip(this.ships[shipName].ship, x, y, axis);
            this.ships[shipName].placed = true;
            return true;
        } catch (err) {
            return false;
        }
    }

    placeRandomShips() {
        for (let ship in this.ships) {
            let placed = false;
            while (!placed) {
                let x = Math.floor(Math.random() * 10);
                let y = Math.floor(Math.random() * 10);
                let axis = Math.random() < 0.5 ? 'xAxis' : 'yAxis';

                try {
                    placed = this.placeShip(ship, x, y, axis);
                } catch (e) {
                    placed = false;
                }
            }
        } 
    }

    isAllShipsPlaced() {
        for (let ship in this.ships) {
            if (!this.ships[ship].placed) return false;
        }
        return true;
    }

    resetAllShips() {
        for (let ship in this.ships) {
            this.ships[ship].placed = false;
            this.ships[ship].ship = new Battleship(this.ships[ship].ship.length, this.ships[ship].ship.name);
        }
    }
}

module.exports = Player;