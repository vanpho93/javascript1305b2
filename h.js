// function Point(x, y) {
//     //x, y
//     this.x = x;
//     this.y = y;
// }

class Point {
    constructor(x, y) {
        //x, y
        this.x = x;
        this.y = y;
    }
}

// function Line(pointA, pointB) {
//     //pointA, pointB
//     // - getLength
//     this.pointA = pointA;
//     this.pointB = pointB;
//     this.getLength = function () {
//         const dx = this.pointA.x - this.pointB.x;
//         const dy = this.pointA.y - this.pointB.y;
//         return Math.sqrt(dx * dx + dy * dy);
//     }
// }

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
}
const pA = new Point(0, 0);
const pB = new Point(1, 0);
const pC = new Point(0, 1);

const lAB = new Line(pA, pB);
// const length =lAB.getLength();
// console.log(length);

console.log(lAB.getLength());

// // Math.sqrt()
// function Triangle(pointA, pointB, pointC) {
//     this.pointA = pointA;
//     this.pointB = pointB;
//     this.pointC = pointC;
//     this.getPerimeter = function () {
//         const lAB = new Line(pointA, pointB);
//         const lAC = new Line(pointA, pointC);
//         const lBC = new Line(pointB, pointC);
//         return lAB.getLength() + lAC.getLength() + lBC.getLength()
//     }
// }


class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }
    getPerimeter() {
        const lAB = new Line(this.pointA, this.pointB);
        const lAC = new Line(this.pointA, this.pointC);
        const lBC = new Line(this.pointB, this.pointC);
        return lAB.getLength() + lAC.getLength() + lBC.getLength()
    }
}

const tABC = new Triangle(pA, pB, pC);
console.log(tABC.getPerimeter());
//eslint
