class Battleship {
    constructor(length, name='unnamed', hit=0, sunk=false, axis='xAxis') {
        this.length = length;
        this.name = name;
        this.hitCount = hit;
        this.sunk = sunk;
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