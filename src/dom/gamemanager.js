import Battleship from '../modules/battleship';
import Player from '../modules/player';
import UserInterface from './userinterface';

class GameManager {
    constructor(userName='Unknown', enemyName='Bot') {
        this.player = new Player(userName);
        this.enemy = new Player(enemyName, 'computer');
        this.UI = new UserInterface(this.player, this.enemy);
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

            this.player.gameboard.attackCoordinate(x, y);
            this.UI.updateGrids(this.player.gameboard, this.enemy.gameboard);

            if (this.checkWinner()) return;

            this.currentPlayer = this.player;
        }
    }

    enemyGridEventHandler(e) {
        if (this.isGameOn && this.currentPlayer === this.player) {
            const index = this.UI.enemyGridCells.indexOf(e.target);
            const x = Math.floor(index / 10);
            const y = index % 10;

            if (this.enemy.gameboard.attackCoordinate(x, y)) {
                this.UI.updateGrids(this.player.gameboard, this.enemy.gameboard);
                
                if (this.checkWinner()) return;

                this.currentPlayer = this.enemy;
            }
        }
    }

    checkWinner() {
        if (this.player.gameboard.isAllSunk()) {
            // player lost
            return true;
        } else if (this.enemy.gameboard.isAllSunk()) {
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
        if (this.isGameOn) this.UI.disableButtons(false);

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