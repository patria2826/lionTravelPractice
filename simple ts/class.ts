class Player {
    name: string;
    x: number;
    y: number;
    constructor(name: string, x?: number, y?: number) {
        this.name = name;
        x ? this.x = x : this.x = 0;
        y ? this.y = y : this.y = 0;
    }
}

let p1 = new Player("Sam", 3, 5);
let p2 = new Player("Leo");

console.log(p1);
console.log(p2);