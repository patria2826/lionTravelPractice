// please rely on type inference as much as we can
// rely on type annotation on the 3 situations mentioned below

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
let myNumbers: number[] = [1, 2, 3, 4, 5];
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
const logNum: (i: number) => void = i => {
  console.log(i);
};

//                 let a           = "apple"
// if we do our declaration and initialization in one single expression,
// ts will is going to figure out the type of the variable

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x:10, "y":20}';
const coordinates_1 = JSON.parse(json);
const coordinates_2: { x: number; y: number } = JSON.parse(json);
console.log(coordinates_1); //{x: 10, y: 20}
coordinates_1.sdajsfsijoqie(); //type 'any' => no error
// coordinates_2.sdajsfsijoqie(); //=> error

// 2) When we declare a variable on one line
//    and initialize it later
let words = ["a", "b", "c"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "c") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [1, 3, -2, 0, -5, -19];
let numberAboveZero: false | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
