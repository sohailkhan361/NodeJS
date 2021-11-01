//accessing Static method in a class
//static methods cannot be accessed using the object/instance of a class 

class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx,dy);
    }
}

const p1 = new Point(5,5);
const p2 = new Point(10,10);

console.log(p1.distance);  //undefined
console.log(p2.distance);  //undefined 
//Static method is accessed using the class name only, else you can use singleton pattern to declare the class 
console.log(Point.distance(p1,p2));  //7.0710678118654755


