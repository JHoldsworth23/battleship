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

    updateGrids(playerGameboard, enemyGameboard=null) {
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
                        enemyCell.classList.add('ship');
                        enemyCell.dataset.length = enemyBattleship.length;
                        enemyCell.dataset.axis = enemyBattleship.axis;
                        enemyCell.dataset.name = enemyBattleship.name;
                    }
                }
            }
        }
    }

    initialiseButtons(...callbackFn) {
        const btns = document.querySelectorAll('button');
        btns.forEach((button, index) => button.addEventListener('click', callbackFn[index]));
    }
}

export default UserInterface;