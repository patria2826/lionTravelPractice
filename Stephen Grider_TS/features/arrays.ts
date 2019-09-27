export {};
// give type annotations when initializing an empty array
const carMakers: string[] = [];
carMakers.push("ford", "toyota", "chevy");

const cars = ["bmw", "audi"];

const carsByMake = [["f150"], ["altas", "corolla"], ["camaro"]];
//==> const carsByMake: string[][]: an array containing string arrays

// Help with inference when extracting values
const car = cars[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(1);

// Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), "2030-10-10"];
// ==> const importantDates: (string | Date)[]
importantDates.push(new Date());
