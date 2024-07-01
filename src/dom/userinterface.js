import Gameboard from "../modules/gameboard";

class UserInterface {
    constructor(player, enemy) {
        this.player = player;
        this.playerGrid = document.getElementById('player-grid');
        this.playerGridCells = [];
        this.enemy = enemy;
        this.enemyGrid = document.getElementById('enemy-grid');
        this.enemyGridCells = [];
        this.temporaryBoard = null;
    }

    createGrid(grid, cells) {
        for (let i = 0; i < 100; i++) {
            const area = document.createElement('div');
            area.classList.add('grid-cell');
            area.dataset.index = i;
            grid.appendChild(area);
            cells.push(area);
        }
    }

    renderGrids() {
        this.createGrid(this.playerGrid, this.playerGridCells);
        this.createGrid(this.enemyGrid, this.enemyGridCells);
    }

    createPlayerGridEventHandler(callbackFn) {
        this.playerGrid.addEventListener('click', callbackFn);
    }

    createEnemyGridEventHandler(callbackFn) {
        this.enemyGrid.addEventListener('click', callbackFn);
    }

    updateGrids(playerGameboard, enemyGameboard=null, hideEnemyShips=true) {
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                const playerCell = this.playerGridCells[x * 10 + y];
                playerCell.classList.remove('ship', 'hit', 'miss');

                if (playerGameboard.board[y][x] === 'hit') {
                    playerCell.classList.add('hit');
                } else if (playerGameboard.board[y][x] === 'miss') {
                    playerCell.classList.add('miss');
                } else if (playerGameboard.board[y][x] !== null) {
                    const playerBattleship = playerGameboard.board[y][x];
                    playerCell.classList.add('ship');
                    playerCell.dataset.length = playerBattleship.length;
                    playerCell.dataset.axis = playerBattleship.axis;
                    playerCell.dataset.name = playerBattleship.name;
                }

                if (enemyGameboard !== null) {
                    const enemyCell = this.enemyGridCells[x * 10 + y];
                    enemyCell.classList.remove('ship', 'hit', 'miss');

                    if (enemyGameboard.board[y][x] === 'hit') {
                        enemyCell.classList.add('hit');
                    } else if (enemyGameboard.board[y][x] === 'miss') {
                        enemyCell.classList.add('miss');
                    } else if (enemyGameboard.board[y][x] !== null) {
                        const enemyBattleship = enemyGameboard.board[y][x];
                        enemyCell.dataset.length = enemyBattleship.length;
                        enemyCell.dataset.axis = enemyBattleship.axis;
                        enemyCell.dataset.name = enemyBattleship.name;

                        if (!hideEnemyShips) enemyCell.classList.add('ship');
                    }
                }
            }
        }
    }

    initialiseButtons(...callbackFn) {
        const randomiseBtn = document.getElementById('random-btn');
        randomiseBtn.addEventListener('click', callbackFn[0]);

        const startBtn = document.getElementById('start-btn');
        startBtn.addEventListener('click', callbackFn[1]);

        const resetBtn = document.getElementById('reset-btn');
        resetBtn.addEventListener('click', callbackFn[2]);
    }

    disableShipDragging() {
        this.playerGridCells.forEach((cell) => {
            cell.setAttribute("draggable", false);
            cell.removeEventListener("dragstart", this.handleDragStart.bind(this));
            cell.removeEventListener("dragend", this.handleDragEnd.bind(this));
            cell.removeEventListener("dragover", this.handleDragOver.bind(this));
            cell.removeEventListener("drop", this.handleDrop.bind(this));

            cell.addEventListener("dragstart", this.eventDisabler);
            cell.addEventListener("dragend", this.eventDisabler);
            cell.addEventListener("dragover", this.eventDisabler);
            cell.addEventListener("drop", this.eventDisabler);
        });
    }

    draggingShips() {
        const ships = this.playerGrid.querySelectorAll('.ship');
        ships.forEach((ship) => this.makeDraggable(ship));

        this.playerGridCells.forEach((cell) => {
            cell.removeEventListener('dragstart', this.eventDisabler);
            cell.removeEventListener('dragend', this.eventDisabler);
            cell.removeEventListener('dragover', this.eventDisabler);
            cell.removeEventListener('drop', this.eventDisabler);
            cell.removeEventListener('dragover', this.handleDragOver.bind(this));
            cell.removeEventListener('drop', this.handleDrop.bind(this));

            cell.addEventListener('dragover', this.handleDragOver.bind(this));
            cell.addEventListener('drop', this.handleDrop.bind(this));
        });
    }

    enableShipDragging(shipName) {
        const ships = this.playerGrid.querySelectorAll(`.ship[data-name="${shipName}"]`);
        ships.forEach((ship) => this.makeDraggable(ship));
    }

    eventDisabler(e) {
        e.preventDefault();
    }

    makeDraggable(ship) {
        ship.setAttribute('draggable', true);

        ship.removeEventListener('dragstart', this.eventDisabler);
        ship.removeEventListener('dragend', this.eventDisabler);
        ship.removeEventListener('dragstart', this.handleDragStart.bind(this));
        ship.removeEventListener('dragend', this.handleDragEnd.bind(this));

        ship.addEventListener('dragstart', this.handleDragStart.bind(this));
        ship.addEventListener('dragend', this.handleDragEnd.bind(this));
    }

    handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.index);
        this.temporaryBoard = new Gameboard(this.player.gameboard.deepCopy(this.player.gameboard.board));
        setTimeout(() => {e.target.classList.add('hide')}, 0);
    }

    handleDragEnd(e) {
        e.target.classList.remove('hide');
    }

    handleDragOver(e) {
        e.preventDefault();
    }

    handleDrop(e) {
        e.preventDefault();
        const shipId = e.dataTransfer.getData('text/plain');
        const ship = this.playerGrid.querySelector(`.ship[data-index="${shipId}"]`);
        
        const index = e.target.dataset.index;
        const x = Math.floor(index / 10);
        const y = index % 10;

        if (!ship || x * 10 + y == shipId) return;

        const shipAxis = ship.dataset.axis;
        const shipToBePlaced = this.temporaryBoard.getLocationByShipName(ship.dataset.name);

        this.temporaryBoard.removeShip(shipToBePlaced);

        if (this.temporaryBoard.canShipBePlaced(shipToBePlaced, x, y, shipAxis)) {
            try {
                this.player.removeShip(ship.dataset.name);

                if (this.player.placeShip(ship.dataset.name, x, y, shipAxis)) {
                    this.updateGrids(this.player.gameboard);
                    this.enableShipDragging(ship.dataset.name);
                }
            } catch (err) {
                console.log(err.message);
            }
        }
    } 
}

export default UserInterface;