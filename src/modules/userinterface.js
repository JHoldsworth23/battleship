class UserInterface {
    constructor(player, enemy) {
        this.player = player;
        this.playerGrid = document.getElementById('player-grid');
        this.playerGridCells = [];
        this.enemy = enemy;
        this.enemyGrid = document.getElementById('enemy-grid');
        this.enemyGridCells = [];
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
}

export default UserInterface;