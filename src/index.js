import GameManager from "./dom/gamemanager";
import createFooterSection from "./dom/webpage";
import './style.css';

createFooterSection();

const gameManager = new GameManager();
gameManager.initialiseGame();