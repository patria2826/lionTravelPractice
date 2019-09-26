// type annotation
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined;

// built in obj
let now: Date = new Date();

// Array
let colors: string[] = ["red", "blue", "black", "green"];
let numbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, true, false];

// Class
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  // error msgs
  // 1. Property 'y' is missing in type '{ x: number; }' but required in type '{ x: number; y: number; }'
  // 2. Type 'string' is not assignable to type 'number'
  // 3. Type '{ x: number; y: number; z: number; }' is not assignable to type '{ x: number; y: number; }'.
  //   Object literal may only specify known properties, and 'z' does not exist in type '{ x: number; y: number; }'.
  x: 10,
  y: 20
};

// Function
const logNum = (i: number) => {
  console.log(i);
};
