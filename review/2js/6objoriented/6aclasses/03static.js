// static method belongs to the class not individual instances, same for static properties.
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    
    static statProp = "Lol";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(7, 2);
const p2 = new Point(3, 8);
console.log(Point.distance(p1, p2));
 
let p3 = new Point(10, 4);

// console.log(p3.distance(p2,p1)); leads to error

// console.log(p3.statProp) undefined
console.log(Point.statProp);