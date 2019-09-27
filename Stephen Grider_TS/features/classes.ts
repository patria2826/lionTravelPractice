export {};
class Vehicle {
  constructor(public color: string) {}

  drive(): void {
    console.log("chugga chugga");
  }

  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  // not putting modifiers in front of color means the color comes from Vehicle
  constructor(public wheel: number, color: string) {
    super(color);
  }

  drive(): void {
    //override
    console.log("purrrrr");
  }
  private driveCar(): void {
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.driveCar();
    this.honk();
  }
}
const bus = new Vehicle("white");
bus.drive();
console.log(bus.color);

const car = new Car(4, "red");
car.drive();
car.startDrivingProcess();
