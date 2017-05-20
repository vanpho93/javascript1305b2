class Point {
    constructor(x, y) {
        //x, y
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getLength() {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    static compare(l1, l2) {
        return l1.getLength() > l2.getLength() ? l1 : l2;
    }
}

// Line.compare();

class MyLine extends Line {

}

MyLine.compare();
