import Player from './player';
import UserInterface from './userinterface';

class GameManager {
    constructor(userName='Unknown', enemyName='Bot') {
        this.player = new Player(userName);
        this.enemy = new Player(enemyName, 'computer');
        this.UI = new UserInterface(this.player, this.enemy);
        this.currentPlayer = this.player;
        this.isGameOver = false;
    }
    
    initialiseGame() {
        this.UI.renderGrids();

        if (this.enemy.type === 'computer') {
            this.UI.createPlayerGridEventHandler((e) => e.preventDefault());
        } else {
            this.UI.createPlayerGridEventHandler(this.playerGridEventHandler.bind(this));
        }

        this.UI.createEnemyGridEventHandler(this.enemyGridEventHandler.bind(this));

    }

    playerGridEventHandler(e) {
        if (!this.isGameOver && this.currentPlayer === this.enemy) {
            const index = this.UI.playerGridCells.indexOf(e.target);
            const x = Math.floor(index / 10);
            const y = index % 10;

            this.player.gameboard.attackCoordinate(x, y);
            // update UI gameboard grid

            // check if the enemy wins

            this.currentPlayer = this.player;
        }
    }

    enemyGridEventHandler(e) {
        if (!this.isGameOver && this.currentPlayer === this.player) {
            const index = this.UI.enemyGridCells.indexOf(e.target);
            const x = Math.floor(index / 10);
            const y = index % 10;

            if (this.enemy.gameboard.attackCoordinate(x, y)) {
                // update UI gameboard grid
                
                // check if the player wins 

                this.currentPlayer = this.enemy;
            }
        }
    }

}

export default GameManager;