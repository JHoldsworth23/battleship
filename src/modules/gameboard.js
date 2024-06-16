class Gameboard {
    constructor(board=null) {
        this.board = board === null 
            ? Array(10).fill(null).map(() => Array(10).fill(null)) 
            : board;
    }

    placeShip(ship, x, y, axis) {
        if ((axis === 'xAxis' && x + ship.length > 10) || (axis === 'yAxis' && y + ship.length > 10)) {
            throw new Error('Ship is out of bounds');
        }

        if (axis === 'xAxis') {
            for (let i = 0; i < ship.length; i++) {
                this.board[y][x + i] = ship;
            }
        } else if (axis === 'yAxis') {
            for (let i = 0; i < ship.length; i++) {
                this.board[y + i][x] = ship;
            }
        }
    }

    attackCoordinate(x, y) {
        if (x < 0 || x > 10 || y < 0 || y > 10 || this.board[y][x] === 'miss') return false;

        if (this.board[y][x] === null) {
            this.board[y][x] = 'miss';
            return this.board[y][x];
        } else if (this.board[y][x] !== 'hit') {
            this.board[y][x].hit();
            this.board[y][x] = 'hit';
            return this.board[y][x];
        } 
        
        return false;
    }

    isAllSunk() {
        return this.board
          .flat()
          .filter((area) => area !== null && area !== 'hit' && area !== 'miss')
          .every((ship) => ship.sunk);
    }
}

module.exports = Gameboard;