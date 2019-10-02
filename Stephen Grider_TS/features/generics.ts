class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arrOfsth = new ArrayOfAnything(["a", "b", 1, 2]);

// Examples of generics with functions
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printAnything(["a", "b"]);

// Generic Constraints
interface Printable {
  print(): void;
}

class Car {
  print() {
    console.log("I am a car");
  }
}

class Bike {
  print() {
    console.log("I am a bike");
  }
}

function printCarOrBike<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
printCarOrBike([new Bike(), new Car()]);
