class Gameboard {
    constructor(board=null) {
        this.board = board === null 
            ? Array(10).fill(null).map(() => Array(10).fill(null)) 
            : board;
    }

    placeShip(ship, x, y, axis) {
        if (axis === 'xAxis') {
            for (let i = 0; i < ship.length; i++) {
                this.board[y][x + i] = ship;
            }
            // y index first and then x index;
        } else if (axis === 'yAxis') {
            for (let i = 0; i < ship.length; i++) {
                this.board[y + i][x] = ship;
            }
        }
    }

    attackCoordinate() {

    }

    isAllSunk() {

    }
}

module.exports = Gameboard;