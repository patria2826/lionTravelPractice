var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player(
    // private readonly name: string,
    // public name: string, 
    name, //the child class can access to "protected" fields of the parent class
    //when a field is passed into the constructor as an argument with prefix public/protected/private, it gets directly assigned from that argument value
    // optional arguments must be declared after required argements
    x, y) {
        this.name = name;
        this.luckPointBase = Math.round(Math.random() * 10); //private is only enforced in ts at compilation time. Nothing in js will keep the field or method private
        this.HP = 100;
        this.MP = 100;
        // when initializing sth inside constructor, there must be a type on the field declaration
        Player.playerCnt++; //cannot use "this.playCnt"
        x ? this.x = x : this.x = 0;
        y ? this.y = y : this.y = 0;
    }
    Player.prototype.display = function (prefix) {
        console.log(prefix + (" " + this.name + " is at (" + this.x + "," + this.y + "). HP: " + this.HP + "%   MP: " + this.MP + "%"));
    };
    Player.prototype.updatePlayer = function () {
    };
    Player.playerCnt = 0; //"static" define properties on the class itself rather than the instances
    Player.maxSpeed = 5; //readonly is only enforced in ts at compilation time. Nothing in js will pervent a readonly field being modified
    return Player;
}());
var Gunner = /** @class */ (function (_super) {
    __extends(Gunner, _super);
    function Gunner(//arguments declared here have nothing to do with the parent class
    bulletsUsed, name, gunType, x, y) {
        var _this = _super.call(this, name, x, y) || this;
        _this.gunType = gunType;
        _this._bulletsLeft = 10; //the underline is for the camelcase convention
        bulletsUsed > 10 ? _this._bulletsLeft = 0 : _this._bulletsLeft -= bulletsUsed;
        return _this;
    }
    Gunner.prototype.updatePlayer = function () {
        _super.prototype.updatePlayer.call(this); //inherits method of parent
        this._bulletsLeft++;
    };
    Gunner.prototype.calMotion = function () { }; //abstract method from parent, nust implement
    Object.defineProperty(Gunner.prototype, "bulletsLeft", {
        get: function () {
            return this._bulletsLeft;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0.');
            }
            this._bulletsLeft = value;
        },
        enumerable: true,
        configurable: true
    });
    return Gunner;
}(Player));
var p1 = new Gunner(5, "Sam", "N/a"); //cannot new an abstract class
var p2 = new Gunner(3, "Leo", "Nuclear Bomber", 3, 5);
var p3 = new Gunner(2, "Jesicca", "Razor Gun", 2, 3);
var p4 = new Gunner(10, "Nancy", "Machine Gun", 1, 1);
p4.bulletsLeft = 6;
var bb = p4.bulletsLeft;
console.log(bb);
p1.display('Rooky Player');
p2.display('Pro Player');
p3.display('Pro Player');
p4.display('Rooky Player');
var objs = [p1, p2, p3, p4];
console.log(objs);
