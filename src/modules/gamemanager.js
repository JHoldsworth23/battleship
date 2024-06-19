import Player from './player';
import UserInterface from './userinterface';

class GameManager {
    constructor(userName='Unknown', enemyName='Bot') {
        this.player = new Player(userName);
        this.enemy = new Player(enemyName, 'computer');
        this.UI = new UserInterface(this.player, this.enemy);
    }
    
    initialiseGame() {
        this.UI.renderGrids();
    }

}

export default GameManager;