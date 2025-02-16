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
        this.hasStartBtnClicked = false;
        this.screenSize = window.screen.width;
        this.screenSizeCalled = false;
    }

    createGrid(grid, cells) {
        for (let i = 0; i < 100; i++) {
            const area = document.createElement('div');
            area.classList.add('grid-cell');
            area.dataset.index = i;
            area.setAttribute('draggable', false);
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
    
                if (playerGameboard.board[x][y] === 'hit') {
                    playerCell.classList.add('hit');
                } else if (playerGameboard.board[x][y] === 'miss') {
                    playerCell.classList.add('miss');
                } else if (playerGameboard.board[x][y] !== null) {
                    const playerBattleship = playerGameboard.board[x][y];
                    playerCell.classList.add('ship');
                    playerCell.dataset.length = playerBattleship.length;
                    playerCell.dataset.axis = playerBattleship.axis;
                    playerCell.dataset.name = playerBattleship.name;
                } 
                
                if (!playerCell.classList.contains('ship')) {
                    delete playerCell.dataset.length;
                    delete playerCell.dataset.axis;
                    delete playerCell.dataset.name;
                    playerCell.setAttribute('draggable', false);
                }

                if (enemyGameboard !== null) {
                    const enemyCell = this.enemyGridCells[x * 10 + y];
                    enemyCell.classList.remove('ship', 'hit', 'miss');

                    if (enemyGameboard.board[x][y] === 'hit') {
                        enemyCell.classList.add('hit');
                    } else if (enemyGameboard.board[x][y] === 'miss') {
                        enemyCell.classList.add('miss');
                    } else if (enemyGameboard.board[x][y] !== null) {
                        const enemyBattleship = enemyGameboard.board[x][y];
                        enemyCell.dataset.length = enemyBattleship.length;
                        enemyCell.dataset.axis = enemyBattleship.axis;
                        enemyCell.dataset.name = enemyBattleship.name;

                        if (!hideEnemyShips) enemyCell.classList.add('ship');
                    }
                }
            }
        }

        if (this.screenSize <= 960 && !this.screenSizeCalled) {
            const gameContainer = document.querySelector('.game-container');
            
            const playerGrid = document.getElementById('player-grid');
            const playerTitle = document.createElement('p');
            playerTitle.textContent = 'Your Grid:';
            gameContainer.insertBefore(playerTitle, playerGrid);

            const enemyGrid = document.getElementById('enemy-grid');
            const enemyTitle = document.createElement('p');
            enemyTitle.textContent = "Opponent's Grid:";
            gameContainer.insertBefore(enemyTitle, enemyGrid);

            this.screenSizeCalled = true;
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

    eventDisabler(e) {
        e.preventDefault();
    }

    disableChangingShipLocation() {
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

        const ships = this.playerGrid.querySelectorAll('.ship');
        ships.forEach((ship) => {
            ship.removeEventListener('click', this.handleShipAxis.bind(this));
            ship.addEventListener('click', this.eventDisabler);
        });
    }

    enableMoveShips() {
        const ships = this.playerGrid.querySelectorAll('.ship');
        ships.forEach((ship) => this.changeShipLocationEvent(ship));

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

    changeShipLocationEvent(ship) {
        ship.setAttribute('draggable', true);

        ship.removeEventListener('dragstart', this.eventDisabler);
        ship.removeEventListener('dragend', this.eventDisabler);
        ship.removeEventListener('dragstart', this.handleDragStart.bind(this));
        ship.removeEventListener('dragend', this.handleDragEnd.bind(this));

        ship.addEventListener('dragstart', this.handleDragStart.bind(this));
        ship.addEventListener('dragend', this.handleDragEnd.bind(this));

        ship.removeEventListener('click', this.eventDisabler);
        ship.removeEventListener('click', this.handleShipAxis.bind(this));

        ship.addEventListener('click', this.handleShipAxis.bind(this), {once: true});
    }

    handleDragStart(e) {
        e.dataTransfer.setData('text', e.target.dataset.index);
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
        if (!this.hasStartBtnClicked) {
            const shipId = e.dataTransfer.getData('text');
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
                        this.enableMoveShips();
                    }
                } catch (err) {
                    console.log(err.message);
                }
            }
        }
    } 

    handleShipAxis(e) {
        e.preventDefault();
        if (!this.hasStartBtnClicked) {
            this.temporaryBoard = new Gameboard(this.player.gameboard.deepCopy(this.player.gameboard.board));

            const shipId = e.target.dataset.index;
            const ship = this.playerGrid.querySelector(`.ship[data-index="${shipId}"]`);

            const x = Math.floor(shipId / 10);
            const y = shipId % 10;

            const newAxis = ship.dataset.axis === 'xAxis' ? 'yAxis' : 'xAxis';
            const shipToBePlaced = this.temporaryBoard.getLocationByShipName(ship.dataset.name);

            this.temporaryBoard.removeShip(shipToBePlaced);

            if (this.temporaryBoard.canShipBePlaced(shipToBePlaced, x, y, newAxis)) {
                try {
                    this.player.removeShip(ship.dataset.name);

                    if (this.player.placeShip(ship.dataset.name, x, y, newAxis)) {
                        this.updateGrids(this.player.gameboard);
                        this.enableMoveShips();
                    }
                } catch (err) {
                    console.log(err.message);
                }
            } 
        }
    }

    disableButtons(visible) {
        const randomBtn = document.getElementById('random-btn');
        randomBtn.disabled = visible;
        randomBtn.style.opacity = visible ? 0.75 : 1;

        const startBtn = document.getElementById('start-btn');
        startBtn.disabled = visible;
        startBtn.style.opacity = visible ? 0.75 : 1;
    }

    resetAreas() {
        const playerGrid = document.querySelectorAll('#player-grid > div');
        playerGrid.forEach((area) => area.classList.remove('hit', 'miss', 'ship'));

        const enemyGrid = document.querySelectorAll('#enemy-grid > div');
        enemyGrid.forEach((area) => area.classList.remove('hit', 'miss', 'ship'));
    }

    displayMessage(text, error=false) {
        const message = document.querySelector('.message');
        message.innerHTML = text;

        error ? message.classList.add('error') : message.classList.remove('error');
    }
}

export default UserInterface;