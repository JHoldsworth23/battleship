class UserInterface {
    constructor(player) {
        this.player = player;
        this.playerGrid = document.getElementById('player-grid');
        this.playerGridCells = [];
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
    }
}

export default UserInterface;