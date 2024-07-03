const Battleship = require("./battleship");

class Gameboard {
    constructor(board=null) {
        this.board = board === null 
            ? Array(10).fill(null).map(() => Array(10).fill(null)) 
            : board;
    }

    placeShip(ship, x, y, axis) {
        if (axis === 'xAxis' && y + ship.length > 10) {
            throw new Error('Ship is out of bounds');
        } else if (axis === 'yAxis' && x + ship.length > 10) {
            throw new Error('Ship is out of bounds');
        }

        if (this.checkAreaOccupation(ship.length, x, y, axis)) {
            throw new Error('Another ship has taken this area');
        }

        if (axis === 'xAxis') {
            for (let i = 0; i < ship.length; i++) {
                this.board[x][y + i] = ship;
            }
        } else if (axis === 'yAxis') {
            for (let i = 0; i < ship.length; i++) {
                this.board[x + i][y] = ship;
            }
        }
    }

    checkAreaOccupation(shipLength, x, y, axis) {
        if (axis === 'xAxis') {
            for (let i = 0; i < shipLength; i++) {
                if (this.board[x][y + i] !== null) return true;
            }
        } else if (axis === 'yAxis') {
            for (let i = 0; i < shipLength; i++) {
                if (this.board[x + i][y] !== null) return true;
            }
        }

        return false;
    }

    attackCoordinate(x, y) {
        if (x < 0 || x > 10 || y < 0 || y > 10 || this.board[x][y] === 'miss') return false;

        if (this.board[x][y] === null) {
            this.board[x][y] = 'miss';
            return this.board[x][y];
        } else if (this.board[x][y] !== 'hit') {
            this.board[x][y].hit();
            this.board[x][y] = 'hit';
            return this.board[x][y];
        } 
        
        return false;
    }

    isAllSunk() {
        return this.board
          .flat()
          .filter((area) => area !== null && area !== 'hit' && area !== 'miss')
          .every((ship) => ship.sunk);
    }

    resetBoard() {
        this.board = Array(10).fill(null).map(() => Array(10).fill(null));
    }

    deepCopy(board) {
        const newBoard = Array(10).fill(null).map(() => Array(10).fill(null));
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = board[i][j];
                if (cell instanceof Battleship) {
                    newBoard[i][j] = new Battleship(cell.length, cell.name, cell.hitCount, cell.sunk, cell.axis);
                } else {
                    newBoard[i][j] = cell;
                }
            }
        }

        return newBoard;
    }

    getLocationByShipName(shipName) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.board[i][j] !== null && this.board[i][j].name == shipName) {
                    return this.board[i][j];
                }
            }
        }

        return null;
    }

    removeShip(ship) {
        if (ship === null) return;

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.board[i][j] !== null && this.board[i][j].name == ship.name) {
                    this.board[i][j] = null;
                }
            }
        }
    }

    canShipBePlaced(ship, x, y, axis) {
        if (ship === null) return false;

        if (axis === 'xAxis' && y + ship.length > 10) {
            return false;
        } else if (axis === 'yAxis' && x + ship.length > 10) {
            return false;
        }
        
        if (this.checkAreaOccupation(ship.length, x, y, axis)) return false;

        return true;
    }
}

module.exports = Gameboard;