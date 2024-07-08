import Player from '../modules/player';
import UserInterface from './userinterface';
import AI from '../modules/ai';

class GameManager {
    constructor(userName='Unknown', enemyName='Bot') {
        this.player = new Player(userName);
        this.enemy = new Player(enemyName, 'computer');
        this.UI = new UserInterface(this.player, this.enemy);
        this.AI = new AI(this.enemy, this.UI, this.player);
        this.currentPlayer = null;
        this.isGameOn = false;
    }
    
    initialiseGame() {
        this.UI.renderGrids();

        if (this.enemy.type === 'computer') {
            this.UI.createPlayerGridEventHandler((e) => e.preventDefault());
        } else {
            this.UI.createPlayerGridEventHandler(this.playerGridEventHandler.bind(this));
        }

        this.UI.createEnemyGridEventHandler(this.enemyGridEventHandler.bind(this));

        this.player.placeRandomShips();
        this.UI.initialiseButtons(this.randomisePlayerShips.bind(this), this.startGame.bind(this), this.resetGame.bind(this));
        this.UI.updateGrids(this.player.gameboard, this.enemy.gameboard);
        this.UI.draggingShips();
    }

    playerGridEventHandler(e) {
        if (this.isGameOn && this.currentPlayer === this.enemy) {
            const index = this.UI.playerGridCells.indexOf(e.target);
            const x = Math.floor(index / 10);
            const y = index % 10;

            if (this.checkWinner()) return;

            this.player.gameboard.attackCoordinate(x, y);
            this.UI.updateGrids(this.player.gameboard, this.enemy.gameboard);

            this.currentPlayer = this.player;
        }
    }

    enemyGridEventHandler(e) {
        if (this.isGameOn && this.currentPlayer === this.player && !this.AI.duringMove) {
            const index = this.UI.enemyGridCells.indexOf(e.target);
            const x = Math.floor(index / 10);
            const y = index % 10;

            if (this.enemy.gameboard.attackCoordinate(x, y)) {
                this.UI.updateGrids(this.player.gameboard, this.enemy.gameboard);
                
                if (this.checkWinner()) return;

                this.currentPlayer = this.enemy;

                this.AI.duringMove = true;
                setTimeout(this.AI.makeMove.bind(this.AI), 200 + Math.floor(Math.random() * 600));
                this.currentPlayer = this.player;
            }
        }
    }

    checkWinner() {
        if (this.player.gameboard.isAllSunk()) {
            this.isGameOn = false;
            // player lost
            return true;
        } else if (this.enemy.gameboard.isAllSunk()) {
            this.isGameOn = false;
            // player wins
            return true;
        }

        return false;
    }

    startGame() {
        if (this.isGameOn) {
            // message - game is already started
            return;
        } else if (!this.player.isAllShipsPlaced()) {
            // message - not all ships are placed 
            return;
        }

        this.isGameOn = true;
        this.currentPlayer = this.player;
        this.enemy.placeRandomShips();
        this.UI.disableShipDragging();
        this.UI.updateGrids(this.player.gameboard, this.enemy.gameboard);
        this.UI.disableButtons(true);
    }

    randomisePlayerShips() {
        this.player.gameboard.resetBoard();
        this.player.resetAllShips();
        this.player.placeRandomShips();
        this.UI.updateGrids(this.player.gameboard, this.enemy.gameboard);
        this.UI.draggingShips();
    }

    resetGame() {
        this.UI.disableButtons(false);
        this.isGameOn = false;
        this.currentPlayer = null;
        this.player.gameboard.resetBoard();
        this.enemy.gameboard.resetBoard();
        this.player.resetAllShips();
        this.enemy.resetAllShips();
        this.UI.resetAreas();
        this.player.placeRandomShips();
        this.UI.updateGrids(this.player.gameboard, this.enemy.gameboard);
        this.UI.draggingShips();
    }

}

export default GameManager;