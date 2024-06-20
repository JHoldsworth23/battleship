class Battleship {
    constructor(length, name='unnamed', axis='xAxis') {
        this.length = length;
        this.name = name;
        this.hitCount = 0;
        this.sunk = false;
        this.axis = axis;
    }

    hit() {
        this.hitCount++;
        if (this.length === this.hitCount) this.sunk = true;
    }

    isSunk() {
        return this.sunk;
    }

    setAxis(axis) {
        this.axis = axis;
    }
}

module.exports = Battleship;