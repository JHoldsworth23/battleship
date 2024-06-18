import Player from './player';
import UserInterface from './userinterface';

class GameManager {
    constructor(userName='Unknown') {
        this.player = new Player(userName);
        this.UI = new UserInterface(this.player);
    }
    
    initialiseGame() {
        this.UI.renderGrids();
    }

}

export default GameManager;