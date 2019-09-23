var Player = /** @class */ (function () {
    function Player(name, x, y) {
        this.name = name;
        x ? this.x = x : this.x = 0;
        y ? this.y = y : this.y = 0;
    }
    return Player;
}());
var p1 = new Player("Sam", 3, 5);
var p2 = new Player("Leo");
console.log(p1);
console.log(p2);
