class AI {
    constructor(enemy, ui, player) {
        this.enemy = enemy;
        this.ui = ui;
        this.player = player;
        this.nextAttacks = [];
        this.duringMove = false;
    }

    makeMove() {
        let x;
        let y;

        if (this.nextAttacks.length > 0) {
            const [lastHitX, lastHitY] = this.nextAttacks[0];
            const coordinates = [
                [lastHitX - 1, lastHitY], [lastHitX + 1, lastHitY],
                [lastHitX, lastHitY - 1], [lastHitX, lastHitY + 1]
            ];

            for (let [nextX, nextY] of coordinates) {
                if (this.validAttack(nextX, nextY)) {
                    x = nextX;
                    y = nextY;
                    break;
                }
            }

            if (x === undefined || y === undefined) {
                this.nextAttacks.shift();
                this.makeMove();
                return;
            }
        } else {
            this.randomAttack();
        }

        const hitSuccessful = this.player.gameboard.attackCoordinate(x, y);
        if (hitSuccessful === 'hit') {
            this.nextAttacks.push([x, y]);
        }
    }

    randomAttack() {
        let x;
        let y;
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        } while (this.player.gameboard.board[x][y] === 'hit' || this.player.gameboard.board[x][y] === 'miss');
    }

    validAttack(x, y) {
        return x >= 0 && x < 10 && y >= 0 && y < 10 && this.player.gameboard.board[x][y] !== 'hit' && this.player.gameboard.board[x][y] !== 'miss';
    }
}