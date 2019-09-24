interface GameObj {
    HP: number,
    MP: number,
    updatePlayer(): void
}

abstract class Player implements GameObj {
    static playerCnt: number = 0; //"static" define properties on the class itself rather than the instances
    static readonly maxSpeed: number = 5; //readonly is only enforced in ts at compilation time. Nothing in js will pervent a readonly field being modified
    private luckPointBase: number = Math.round(Math.random() * 10); //private is only enforced in ts at compilation time. Nothing in js will keep the field or method private


    x: number;
    y: number;
    HP = 100;
    MP = 100;
    constructor(
        // private readonly name: string,
        // public name: string, 
        protected readonly name: string,  //the child class can access to "protected" fields of the parent class
        //when a field is passed into the constructor as an argument with prefix public/protected/private, it gets directly assigned from that argument value

        // optional arguments must be declared after required argements
        x?: number,
        y?: number) {
        // when initializing sth inside constructor, there must be a type on the field declaration
        Player.playerCnt++; //cannot use "this.playCnt"

        x ? this.x = x : this.x = 0;
        y ? this.y = y : this.y = 0;
    }

    display(prefix: string): void {
        console.log(
            prefix + ` ${this.name} is at (${this.x},${this.y}). HP: ${this.HP}%   MP: ${this.MP}%`
        )
    }

    updatePlayer() {

    }

    abstract calMotion(): void; //cannot have an implementation because it is marked abstract
}

class Gunner extends Player {
    bulletsLeft: number = 10;

    constructor( //arguments declared here have nothing to do with the parent class
        bulletsUsed: number,
        name: string,
        public gunType: string,
        x?: number,
        y?: number,
    ) {
        super(name, x, y); //inherits arguments declared in the parent class when using super
        bulletsUsed > 10 ? this.bulletsLeft = 0 : this.bulletsLeft -= bulletsUsed;
    }
    
    updatePlayer() { //has nothig to do with method of parent
        super.updatePlayer(); //inherits method of parent
        this.bulletsLeft++;
    }

    calMotion() { } //method from parent
}

let p1 = new Gunner(5, "Sam", "N/a"); //cannot new an abstract class
let p2 = new Gunner(3, "Leo", "Nuclear Bomber", 3, 5);
let p3 = new Gunner(2, "Jesicca", "Razor Gun", 2, 3);
let p4 = new Gunner(10, "Nancy", "Machine Gun", 1, 1);

p1.display('Rooky Player');
p2.display('Pro Player');
p3.display('Pro Player');
p4.display('Rooky Player');

let objs: GameObj[] = [p1, p2, p3, p4];
console.log(objs);
