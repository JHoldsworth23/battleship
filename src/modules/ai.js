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
            // work out the next area when a player ship has been hit
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
}